import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Index = () => (
  <Layout>
    <section id="accueil" className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Agence web & stratégie digitale
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          GLOOWA est une agence spécialisée dans le conseil, l'accompagnement et la transition digitale des TPE/PME.
          </p>
          <p className="mt-8 md:mt-12">
            <AnchorLink className="px-4" href="#clients"><Button size="lg">Planifier un RDV</Button></AnchorLink>
          </p>
          {/* <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p> */}
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="services" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Notre expertise : </h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Audit & Conseil</p>
              <p className="mt-4">
              + Audit de site Web
              + Audit SEO
              + Transition digitale
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Développement</p>
              <p className="mt-4">
              + Création de Site web
              + Site e-commerce
              + Application web ou c/s
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Design</p>
              <p className="mt-4">
              + Identité visuelle
              + Design fonctionnel
              + Ergonomie d’interface
              </p>
            </Card>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Copywriting</p>
              <p className="mt-4">
              + Création de contenus
              + Traduction
              + Social management
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">SEO & Web Marketing</p>
              <p className="mt-4">
              + Gestion de site web
              + SEO & marketing
              + Développement
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Formation</p>
              <p className="mt-4">
              + Référencement naturel
              + Référencement payant
              + Social Marketing
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
     <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Un accompagnement sur-mesure</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">Chaque projet est unique, et mérite une méthodologie soignée
          {/* Définition de la stratégie
Nous analysons vos objectifs commerciaux et les traduisons en une stratégie globale du projet en définissant un plan d’actions valide.

Etude concurrentielle
Nous effectuons une étude concurrentielle et des tendances de recherches, ce qui permet d’évaluer les opportunités.

Architecture de l'information
Grâce à notre expérience online nous recherchons la solution adéquate à vos besoins et proposons une architecture dans le respect des standards.

Maquettage & Design
Nous traduisons notre étude en une solution pertinente, capable d’apporter performance, simplicité et confort d’utilisation en proposant un maquettage de qualité.

Mise en production
Votre site Web sera développé autour de technologies fiables et indépendantes ayant fait leurs preuves et constamment mises à jour.

Tests Fonctionnels
Un accent sera mis sur l’optimisation du code, l’ergonomie et le référencement grâce à des test d’intégrations sur tous types de terminaux.

Publication
Vous disposez d’une solution clé en main : tout votre contenu sera prêt à l’emploi, et le site prêt à être administré par vos collaborateurs.

Promotion
Des solutions en Web-marketing vous seront proposées afin que votre site puisse profiter des premières places dans les moteurs de recherche */}
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
{/*    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section> */}
    <section id="clients" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Ce que disent nos Clients …</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="contact" className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Créons le liens</h3>
      <p className="mt-8 text-xl font-light">
      Parlez-nous de votre futur projet. Notre siège est à Saint-Etienne. Nos clients viennent du monde entier.
      </p>
      <p className="mt-8">
        <Button size="xl">contact @ gloowa.com</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
