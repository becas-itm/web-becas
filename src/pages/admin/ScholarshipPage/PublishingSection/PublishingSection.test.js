import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PublishingSection } from './PublishingSection';

const COMPLETE_SCHOLARSHIP = {
  entity: {
    name: 'daad',
    fullName: 'Servicio Alemán de Intercambio Académico',
  },
  fillStatus: 'COMPLETE',
  state: 'PENDING',
};

const INCOMPLETE_SCHOLARSHIP = Object.assign({}, COMPLETE_SCHOLARSHIP, {
  fillStatus: 'INCOMPLETE',
});

const PUBLISHED_SCHOLARSHIP = Object.assign({}, COMPLETE_SCHOLARSHIP, {
  state: 'PUBLISHED',
  approval: {
    approvedAt: '2020-05-21T05:00:00.000Z',
  },
});

const DENIED_SCHOLARSHIP = Object.assign({}, COMPLETE_SCHOLARSHIP, {
  state: 'ARCHIVED',
  denial: {
    deniedAt: '2020-05-21T05:00:00.000Z',
    reason: 'Convocatoria duplicada/archivada',
  },
});

describe('Complete scholarship', () => {
  const renderComplete = (props = {}) =>
    render(<PublishingSection {...COMPLETE_SCHOLARSHIP} {...props} />);

  it('should render correctly', () => {
    const { container } = renderComplete();
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should have a title', () => {
    const { getByText } = renderComplete();
    expect(getByText('Publicación')).toBeInTheDocument();
  });

  it('should have a description', () => {
    const { getByText } = renderComplete();
    const description =
      'Aprueba la publicación de esta convocatoria para que los demás puedan verla.';
    expect(getByText(description)).toBeInTheDocument();
  });

  it('should have a ready status message', () => {
    const { getByTestId } = renderComplete();
    const message = getByTestId('statusMessage');
    expect(message).toHaveTextContent('Convocatoria lista para aprobar');
  });

  describe('publication buttons', () => {
    it('approve button should be clickable', () => {
      const onApprove = jest.fn();
      const { getByTestId } = renderComplete({ onApprove });
      const button = getByTestId('approve');
      fireEvent.click(button);
      expect(onApprove).toHaveBeenCalledTimes(1);
      expect(button).toHaveTextContent('Aprobar');
    });

    it('deny button should be clickable', () => {
      const onDeny = jest.fn();
      const { getByTestId } = renderComplete({ onDeny });
      const button = getByTestId('deny');
      fireEvent.click(button);
      expect(onDeny).toHaveBeenCalledTimes(1);
      expect(button).toHaveTextContent('Rechazar');
    });
  });

  describe('entity field', () => {
    it('should have a title', () => {
      const { getByText } = renderComplete();
      expect(getByText('Ofrecida por')).toBeInTheDocument();
    });

    it('should show full entity name', () => {
      const { getByText } = renderComplete();
      expect(
        getByText(COMPLETE_SCHOLARSHIP.entity.fullName),
      ).toBeInTheDocument();
    });
  });
});

describe('Incomplete scholarship', () => {
  const renderIncomplete = (props = {}) =>
    render(<PublishingSection {...INCOMPLETE_SCHOLARSHIP} {...props} />);

  it('should have a warning status message', () => {
    const { getByTestId } = renderIncomplete();
    const message = getByTestId('statusMessage');
    expect(message).toHaveTextContent(
      'Completa todos los campos de la convocatoria antes de publicarla',
    );
  });

  it('approve button should be disabled', () => {
    const { getByTestId } = renderIncomplete();
    expect(getByTestId('approve')).toBeDisabled();
  });
});

describe('published scholarship', () => {
  const renderPublished = (props = {}) =>
    render(<PublishingSection {...PUBLISHED_SCHOLARSHIP} {...props} />);

  it('approval title', () => {
    const { getByText } = renderPublished();
    expect(getByText('Aprobación')).toBeInTheDocument();
  });

  it('should render approval date', () => {
    const { getByTestId } = renderPublished();
    const dateElement = getByTestId('approvalDate');
    expect(dateElement).toHaveTextContent('21 de mayo de 2020');
  });

  it('archive button should be clickable', () => {
    const onArchive = jest.fn();
    const { getByTestId } = renderPublished({ onArchive });
    const button = getByTestId('archive');
    fireEvent.click(button);
    expect(onArchive).toHaveBeenCalledTimes(1);
    expect(button).toHaveTextContent('Archivar');
  });
});

describe('denied/archived scholarship', () => {
  const renderDenied = (props = {}) =>
    render(<PublishingSection {...DENIED_SCHOLARSHIP} {...props} />);

  it('denial title', () => {
    const { getByText } = renderDenied();
    const title = getByText('Rechazada');
    expect(title).toBeInTheDocument();
  });

  it('should render denial date', () => {
    const { getByTestId } = renderDenied();
    const dateElement = getByTestId('denialDate');
    expect(dateElement).toHaveTextContent('21 de mayo de 2020');
  });

  it('should render denial reason', () => {
    const { getByTestId } = renderDenied();
    expect(getByTestId('denialReason')).toHaveTextContent(
      DENIED_SCHOLARSHIP.denial.reason,
    );
  });

  it('restore button should be clickable', () => {
    const onRestore = jest.fn();
    const { getByTestId } = renderDenied({ onRestore });
    const button = getByTestId('restore');
    fireEvent.click(button);
    expect(onRestore).toHaveBeenCalledTimes(1);
    expect(button).toHaveTextContent('Restaurar');
  });
});
