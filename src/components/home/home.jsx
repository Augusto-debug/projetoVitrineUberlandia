import React from 'react';
import FaleConosco from '../FaleConosco/SecaoFaleConosco';
import Faq from '../Faq/SecaoFaq';
import Parceiros from '../Parceiros/SecaoParceiros';

function Home() {
  return (
    <div>
    <section id="parceiros-section">
        <Parceiros />
    </section>

    <section id="faq-section">
        <Faq />
    </section>

    <section id="faleConosco-section">
        <FaleConosco />
    </section>
    
    </div>
  );
}

export default Home;