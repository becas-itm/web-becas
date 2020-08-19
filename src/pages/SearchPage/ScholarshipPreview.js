import React from 'react';
import propTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';

import LinkButton from 'ui/LinkButton';
import { formatDeadline } from 'ui/ScholarshipFields';

const arrowVariants = {
  hidden: {
    opacity: 0,
    ease: 'easeOut',
    duration: 0.075,
    x: '-25%',
  },
  showUpFromLeft: {
    opacity: 1,
    x: '0%',
    transition: {
      duration: 0.075,
      ease: 'easeIn',
    },
  },
};

export default function ScholarshipPreview({
  id,
  name,
  description,
  deadline,
  entity,
}) {
  const detailLink = `/convocatoria/${id}`;
  return (
    <article className="bg-white shadow-sm rounded-sm md:rounded p-6 md:px-12 md:py-8 lg:py-12 lg:pr-16">
      <h1 className="font-semibold text-2xl leading-none lg:text-3xl">
        <Link
          to={detailLink}
          className="hover:underline focus:underline focus:outline-none"
        >
          {name}
        </Link>
      </h1>

      <p className="mt-4 lg:mt-6">{description}</p>

      <div className="mt-4 md:mt-6">
        <div className="text-medium mb-1 leading-none">Abierta hasta</div>
        <div>{formatDeadline(deadline)}</div>
      </div>

      <footer className="flex items-start justify-between">
        <p className="text-sm italic text-medium mt-4 lg:max-w-md">
          {entity.name}
        </p>

        <motion.div
          initial="hidden"
          whileHover="showUpFromLeft"
          animate="hidden"
          className="hidden lg:block"
        >
          <LinkButton to={detailLink}>
            <div className="flex items-center uppercase">
              Detalles
              <motion.span variants={arrowVariants} className="ml-2">
                <MdArrowForward size={24} />
              </motion.span>
            </div>
          </LinkButton>
        </motion.div>
      </footer>
    </article>
  );
}

ScholarshipPreview.propTypes = {
  id: propTypes.string.isRequired,
  deadline: propTypes.string,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  entity: propTypes.shape({ name: propTypes.string.isRequired }).isRequired,
};
