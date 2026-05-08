import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/organisms/Hero';
import SectorValidation from '../components/organisms/SectorValidation';
import Methodology from '../components/organisms/Methodology';
import IndustrialContext from '../components/organisms/IndustrialContext';
import RiskGuarantee from '../components/organisms/RiskGuarantee';
import FAQ from '../components/organisms/FAQ';
import DiagnosisModal from '../components/organisms/DiagnosisModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Helmet>
        <title>EmpathoAI | Growth Architecture & Revenue Infrastructure Engineering</title>
        <meta name="description" content="EmpathoAI diagnoses growth friction and engineers high-performance revenue systems for companies ready to scale. Stop guessing, start engineering growth." />
      </Helmet>
      <Hero />
      <SectorValidation />
      <Methodology />
      <IndustrialContext />
      <RiskGuarantee onActionClick={toggleModal} />
      <FAQ />
      <DiagnosisModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}
