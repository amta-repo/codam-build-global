import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Building2,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import professionalSafety from '@/assets/professional-safety.jpg';
import teamMemberSite from '@/assets/team-member-site.jpg';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, en respectant les plus hauts standards de qualité.',
      color: 'from-gold to-gold-dark'
    },
    {
      icon: Heart,
      title: 'Intégrité',
      description: 'Transparence et honnêteté dans toutes nos relations professionnelles.',
      color: 'from-primary to-primary-dark'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Adoption des dernières technologies et méthodes pour des solutions optimales.',
      color: 'from-construction-orange to-gold'
    },
    {
      icon: Users,
      title: 'Engagement Client',
      description: 'Votre succès est notre priorité. Nous nous engageons à dépasser vos attentes.',
      color: 'from-construction-blue to-primary'
    }
  ];

  const stats = [
    { number: '10+', label: 'Années d\'Expérience', icon: Award },
    { number: '50+', label: 'Projets Réalisés', icon: Building2 },
    { number: '100%', label: 'Satisfaction Client', icon: Star },
    { number: '5', label: 'Experts Certifiés', icon: Users }
  ];

  const team = [
    {
      name: 'Directeur Technique',
      role: 'Expert en Gestion de Projets',
      image: professionalSafety,
      expertise: ['Management de projets', 'Contrôle qualité', 'Normes de sécurité']
    },
    {
      name: 'Ingénieur Senior',
      role: 'Spécialiste BTP',
      image: teamMemberSite,
      expertise: ['Études techniques', 'Supervision travaux', 'Formation équipes']
    }
  ];

  const certifications = [
    'ISO 9001:2015 - Management de la Qualité',
    'OHSAS 18001 - Santé et Sécurité au Travail',
    'ISO 14001 - Management Environnemental',
    'PMI - Project Management Professional',
    'Certification Construction Durable'
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {t('nav.about')}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold">
                {t('about.title')}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {t('about.mission.text')}
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  {t('common.contact_expert')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src={professionalSafety} 
                alt="Professional Team" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-lg p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="h-8 w-8 text-gold" />
                  <div>
                    <div className="font-semibold text-lg">10+ Ans</div>
                    <div className="text-sm text-muted-foreground">d'Expérience</div>
                  </div>
                </div>
                <p className="text-sm">
                  Une décennie d'excellence en consulting construction
                </p>
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
              <div key={index} className="text-center animate-slide-up group">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8" />
                  </div>
                </div>
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

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <Card className="text-center hover-lift border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">{t('about.mission')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t('about.mission.text')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">{t('about.vision')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t('about.vision.text')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-construction-orange to-construction-orange-light rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">{t('about.values')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t('about.values.text')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre approche et notre engagement envers nos clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift border-0 shadow-lg group">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Notre Équipe
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Experts Passionnés
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une équipe d'experts dédiés à la réussite de vos projets de construction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover-lift border-0 shadow-lg">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      Domaines d'Expertise
                    </h4>
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Certifications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Standards & Qualifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos certifications garantissent le respect des normes internationales les plus exigeantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                <Award className="h-6 w-6 text-gold flex-shrink-0" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 construction-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Prêt à collaborer avec nous ?
            </h2>
            <p className="text-lg text-white/90">
              Découvrez comment notre expertise peut transformer vos projets de construction en succès garantis.
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
                  Voir nos Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;