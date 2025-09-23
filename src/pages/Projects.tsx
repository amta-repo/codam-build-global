import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRight,
  Building2,
  Home,
  ShoppingBag
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import project images
import projectFoundation from '@/assets/project-foundation.jpg';
import teamMemberSite from '@/assets/team-member-site.jpg';
import professionalSafety from '@/assets/professional-safety.jpg';
import buildingStructure from '@/assets/building-structure.jpg';
import constructionFrame from '@/assets/construction-frame.jpg';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: 'Complexe Résidentiel Moderne',
      category: 'Résidentiel',
      categoryIcon: Home,
      location: 'Cotonou, Fidjrossè',
      duration: '18 mois',
      team: '12 personnes',
      status: 'Terminé',
      image: constructionFrame,
      description: 'Construction d\'un complexe résidentiel de 3 bâtiments avec 24 appartements haut standing.',
      services: ['Gestion de projet', 'Contrôle qualité', 'Coordination équipes'],
      results: [
        'Livraison dans les délais',
        'Respect du budget initial',
        '100% satisfaction client',
        'Certification qualité obtenue'
      ]
    },
    {
      id: 2,
      title: 'Centre Commercial Akpakpa',
      category: 'Commercial',
      categoryIcon: ShoppingBag,
      location: 'Cotonou, Akpakpa',
      duration: '24 mois',
      team: '18 personnes',
      status: 'En cours',
      image: buildingStructure,
      description: 'Développement d\'un centre commercial moderne avec espaces commerciaux et parking.',
      services: ['Étude de faisabilité', 'Management', 'Supervision'],
      results: [
        'Phase 1 achevée avec succès',
        'Contrôle qualité optimal',
        'Respect normes sécurité',
        'Formation équipes réalisée'
      ]
    },
    {
      id: 3,
      title: 'Villa Familiale Premium',
      category: 'Résidentiel',
      categoryIcon: Home,
      location: 'Cotonou, Calavi',
      duration: '8 mois',
      team: '8 personnes',
      status: 'Terminé',
      image: projectFoundation,
      description: 'Construction villa familiale avec piscine et aménagements paysagers.',
      services: ['Gestion complète', 'Suivi travaux', 'Coordination'],
      results: [
        'Finition haut de gamme',
        'Délais respectés',
        'Client entièrement satisfait',
        'Standards internationaux'
      ]
    },
    {
      id: 4,
      title: 'Immeuble de Bureaux',
      category: 'Commercial',
      categoryIcon: Building2,
      location: 'Cotonou, Centre-ville',
      duration: '15 mois',
      team: '15 personnes',
      status: 'Terminé',
      image: teamMemberSite,
      description: 'Immeuble de bureaux moderne avec équipements technologiques avancés.',
      services: ['Consulting technique', 'Gestion projet', 'Qualité'],
      results: [
        'Certification environnementale',
        'Économies d\'énergie 30%',
        'Espace de travail optimisé',
        'Livraison anticipée'
      ]
    },
    {
      id: 5,
      title: 'Rénovation Patrimoine',
      category: 'Rénovation',
      categoryIcon: Building2,
      location: 'Porto-Novo',
      duration: '12 mois',
      team: '10 personnes',
      status: 'Terminé',
      image: professionalSafety,
      description: 'Rénovation complète d\'un bâtiment historique en respectant l\'architecture originale.',
      services: ['Expertise patrimoniale', 'Gestion', 'Contrôle'],
      results: [
        'Préservation architecture',
        'Mise aux normes moderne',
        'Valorisation patrimoine',
        'Reconnaissance officielle'
      ]
    }
  ];

  const categories = [
    { name: 'Tous', count: projects.length },
    { name: 'Résidentiel', count: projects.filter(p => p.category === 'Résidentiel').length },
    { name: 'Commercial', count: projects.filter(p => p.category === 'Commercial').length },
    { name: 'Rénovation', count: projects.filter(p => p.category === 'Rénovation').length }
  ];

  const [activeCategory, setActiveCategory] = React.useState('Tous');

  const filteredProjects = activeCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Terminé':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'En cours':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Portfolio
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              {t('projects.title')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background text-muted-foreground hover:text-foreground hover:bg-background/80'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-gold text-primary">
                      {project.category}
                    </Badge>
                    <Badge className={`border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                      <project.categoryIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                    <div className="text-center">
                      <MapPin className="h-4 w-4 text-gold mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Localisation</div>
                      <div className="text-sm font-medium">{project.location}</div>
                    </div>
                    <div className="text-center">
                      <Calendar className="h-4 w-4 text-gold mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Durée</div>
                      <div className="text-sm font-medium">{project.duration}</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-4 w-4 text-gold mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Équipe</div>
                      <div className="text-sm font-medium">{project.team}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      Services Fournis
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      Résultats Clés
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.results.map((result, index) => (
                        <div key={index} className="text-xs flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></div>
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="ghost" className="w-full justify-between group mt-6" asChild>
                    <Link to="/contact">
                      Discuter de ce projet
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 construction-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Votre Projet Suivant ?
            </h2>
            <p className="text-lg text-white/90">
              Rejoignez nos clients satisfaits et bénéficiez de notre expertise pour réussir votre projet de construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Démarrer un Projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline-gold" size="xl" asChild>
                <Link to="/services">
                  Découvrir nos Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;