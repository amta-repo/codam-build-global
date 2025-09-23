import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Clipboard, 
  TrendingUp, 
  Shield, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('services.management.title'),
      description: t('services.management.desc'),
      features: [
        'Planification et coordination',
        'Suivi des travaux en temps réel',
        'Gestion des équipes et sous-traitants',
        'Respect des délais et budgets',
        'Reporting détaillé'
      ],
      color: 'from-primary to-primary-dark'
    },
    {
      icon: Clipboard,
      title: t('services.feasibility.title'),
      description: t('services.feasibility.desc'),
      features: [
        'Analyse de marché approfondie',
        'Étude technique et réglementaire',
        'Évaluation des risques',
        'Recommandations stratégiques',
        'Rapport détaillé'
      ],
      color: 'from-gold to-gold-dark'
    },
    {
      icon: TrendingUp,
      title: t('services.budgeting.title'),
      description: t('services.budgeting.desc'),
      features: [
        'Estimation précise des coûts',
        'Analyse comparative',
        'Optimisation budgétaire',
        'Suivi financier',
        'Contrôle des dépenses'
      ],
      color: 'from-construction-blue to-construction-orange'
    },
    {
      icon: Shield,
      title: t('services.risk.title'),
      description: t('services.risk.desc'),
      features: [
        'Identification des risques',
        'Plan de mitigation',
        'Conformité réglementaire',
        'Audit de sécurité',
        'Accompagnement juridique'
      ],
      color: 'from-primary to-gold'
    },
    {
      icon: Users,
      title: t('services.training.title'),
      description: t('services.training.desc'),
      features: [
        'Formation technique spécialisée',
        'Coaching des équipes',
        'Certification professionnelle',
        'Mise à niveau compétences',
        'Support continu'
      ],
      color: 'from-construction-orange to-gold'
    },
    {
      icon: Award,
      title: t('services.quality.title'),
      description: t('services.quality.desc'),
      features: [
        'Contrôle qualité rigoureux',
        'Standards internationaux',
        'Audit de conformité',
        'Plans de sécurité',
        'Certification projets'
      ],
      color: 'from-gold-dark to-primary'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation Initiale',
      description: 'Analyse de vos besoins et objectifs de projet'
    },
    {
      step: '02',
      title: 'Étude Préliminaire',
      description: 'Évaluation technique et faisabilité du projet'
    },
    {
      step: '03',
      title: 'Proposition Détaillée',
      description: 'Plan d\'action complet avec timeline et budget'
    },
    {
      step: '04',
      title: 'Exécution & Suivi',
      description: 'Mise en œuvre avec monitoring continu'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {t('nav.services')}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              {t('services.title')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-gold group w-full justify-start">
                    {t('common.learn_more')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Notre Processus
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Comment nous travaillons
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une approche structurée pour garantir le succès de vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4 animate-slide-up">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-gold transform -translate-y-px"></div>
                  )}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
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
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-lg text-white/90">
              Contactez nos experts pour une consultation gratuite et un devis personnalisé adapté à vos besoins spécifiques.
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
                Consultation Gratuite
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;