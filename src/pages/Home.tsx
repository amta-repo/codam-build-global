import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle, 
  Building2, 
  Users, 
  Award, 
  Target,
  Clipboard,
  Shield,
  TrendingUp,
  Wrench
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import project images
import projectFoundation from '@/assets/project-foundation.jpg';
import teamMemberSite from '@/assets/team-member-site.jpg';
import professionalSafety from '@/assets/professional-safety.jpg';
import buildingStructure from '@/assets/building-structure.jpg';
import constructionFrame from '@/assets/construction-frame.jpg';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('services.management.title'),
      description: t('services.management.desc'),
      color: 'from-primary to-primary-dark'
    },
    {
      icon: Clipboard,
      title: t('services.feasibility.title'),
      description: t('services.feasibility.desc'),
      color: 'from-gold to-gold-dark'
    },
    {
      icon: TrendingUp,
      title: t('services.budgeting.title'),
      description: t('services.budgeting.desc'),
      color: 'from-construction-blue to-construction-orange'
    },
    {
      icon: Shield,
      title: t('services.risk.title'),
      description: t('services.risk.desc'),
      color: 'from-primary to-gold'
    },
    {
      icon: Users,
      title: t('services.training.title'),
      description: t('services.training.desc'),
      color: 'from-construction-orange to-gold'
    },
    {
      icon: Award,
      title: t('services.quality.title'),
      description: t('services.quality.desc'),
      color: 'from-gold-dark to-primary'
    }
  ];

  const projects = [
    {
      image: projectFoundation,
      title: 'Fondation Résidentielle',
      category: 'Résidentiel',
      description: 'Supervision complète des travaux de fondation'
    },
    {
      image: buildingStructure,
      title: 'Structure Commerciale',
      category: 'Commercial',
      description: 'Gestion de projet structure béton'
    },
    {
      image: constructionFrame,
      title: 'Immeuble Multi-étages',
      category: 'Résidentiel',
      description: 'Suivi qualité construction multi-niveaux'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projets Réalisés' },
    { number: '10+', label: 'Années d\'Expérience' },
    { number: '100%', label: 'Satisfaction Client' },
    { number: '24/7', label: 'Support Disponible' }
  ];

  const whyChooseUs = [
    'Expertise technique avérée',
    'Connaissance du marché local',
    'Standards internationaux',
    'Équipe qualifiée et certifiée',
    'Suivi personnalisé',
    'Respect des délais'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Expert en Construction
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" className="group">
                  {t('hero.cta.quote')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline-gold" size="xl" className="group">
                  <Phone className="mr-2 h-5 w-5" />
                  {t('hero.cta.call')}
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span>Projets Certifiés</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span>Équipe Experte</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span>Support 24/7</span>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={professionalSafety} 
                  alt="Professional Safety" 
                  className="rounded-lg shadow-2xl hover-lift"
                />
                <img 
                  src={teamMemberSite} 
                  alt="Team Member" 
                  className="rounded-lg shadow-2xl hover-lift mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Projet en cours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              {t('common.our_expertise')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-primary hover:text-gold group">
                    {t('common.learn_more')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Portfolio
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t('projects.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover-lift border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold text-primary">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">
                {t('common.view_projects')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <Badge variant="outline" className="mb-4">
                  {t('common.why_choose_us')}
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  {t('about.title')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.mission.text')}
                </p>
              </div>

              <div className="grid gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium">{reason}</span>
                  </div>
                ))}
              </div>

              <Button variant="construction" size="lg" asChild>
                <Link to="/about">
                  {t('common.learn_more')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative animate-scale-in">
              <img 
                src={buildingStructure} 
                alt="Building Structure" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-lg p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="h-8 w-8 text-gold" />
                  <div>
                    <div className="font-semibold text-lg">Excellence</div>
                    <div className="text-sm text-muted-foreground">Notre Engagement</div>
                  </div>
                </div>
                <p className="text-sm">
                  Standards internationaux appliqués à chaque projet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 construction-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('contact.subtitle')}
            </h2>
            <p className="text-lg text-white/90">
              Contactez-nous dès aujourd'hui pour discuter de votre projet de construction. 
              Notre équipe d'experts est prête à vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  {t('hero.cta.contact')}
                  <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline-gold" size="xl">
                <Phone className="mr-2 h-5 w-5" />
                {t('hero.cta.call')}
              </Button>
            </div>
            <div className="flex justify-center items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Wrench className="h-4 w-4" />
                <span>Consultation Gratuite</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Devis Personnalisé</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;