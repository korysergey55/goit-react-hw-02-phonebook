import React from "react";
import PropTypes from "prop-types";
import styles from './Section.module.css'

const Section = ({ title, children }) => {
 return (
  <section>
   <h2 className={styles.sectionTitle}>{title}</h2>
   {children}
  </section>
 );
};

Section.defaultProps = {
 title: "Section-Name",
};

 Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
 };
export default Section;