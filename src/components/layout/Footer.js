import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Gloowa</h2>
        <p className="mt-5">Gloowa est une agence spécialisée dans le Web et la communication digitale. Nous transformons vos visiteurs en acheteurs potentiels.</p>
        {/* VOTRE RÉUSSITE C'EST NOTRE PRÉOCCUPATION
Une équipe qualifiée & passionnée à votre serviceNous proposons un accompagnement tout au long de vos projets digitaux
Qui sommes-nous?
GLOOWA est une agence  spécialisée dans le conseil stratégique, la création de site Web, le développement d’applications et le marketing.

Nous vous accompagnons de A à Z dans vos projets avec des solutions clés en main

Nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.
Mettez-nous à l’épreuve !

Notre philosophie
GLOOWA cultive des valeurs de résultat et respect des engagements afin de garantir à ses clients le meilleur niveau de performance et de proximité.

Nous aimons apporter des solutions  adaptées à vos besoins réels ainsi que des indicateurs permettant de mesurer à tout moment l’atteinte des objectifs que nous aurons fixés ensemble.

Nous nous engageons à :
vous accompagner, vous conseiller en fonction de vos besoins
vous livrer un produit unique & sur-mesure
vous proposer une formation personnalisée en fin de projet
vous offrir un SAV rapide et de qualité */}
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Liens</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="/#">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="/#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://fr.linkedin.com/in/desanctisantonio">Linkedin</a>
          </li>
          <li>
            <a href="https://twitter.com/antoniods">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/antoniods">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
