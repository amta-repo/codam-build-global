import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const services = [
    t('services.management.title'),
    t('services.feasibility.title'),
    t('services.budgeting.title'),
    t('services.risk.title'),
    t('services.training.title'),
    t('services.quality.title')
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address'),
      content: ['Cotonou, Bénin', 'Quartier Fidjrossè', 'Près du carrefour principal'],
      color: 'from-primary to-primary-dark'
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      content: ['+229 01 96 75 76 39', '+229 01 96 75 76 39'],
      action: 'tel:+22901967576390',
      color: 'from-gold to-gold-dark'
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      content: ['contact@codambenin.com', 'info@codambenin.com'],
      action: 'mailto:contact@codambenin.com',
      color: 'from-construction-orange to-gold'
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      content: ['Lun - Ven: 8h00 - 18h00', 'Sam: 8h00 - 13h00', 'Dim: Fermé'],
      color: 'from-construction-blue to-primary'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé avec succès!",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Bonjour CODAM BENIN CONSULTING, je souhaite obtenir des informations sur vos services de consulting en construction.`);
    window.open(`https://wa.me/22901967576390?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {t('nav.contact')}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover-lift border-0 shadow-lg group">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <info.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {info.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {info.action ? (
                        <a 
                          href={info.action} 
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                        >
                          {item}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item}</p>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et nous vous contacterons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.form.name')} *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.form.email')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact.form.phone')} *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">{t('contact.form.company')}</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">{t('contact.form.service')} *</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.message')} *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={5}
                      placeholder="Décrivez votre projet en détail..."
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact & Map */}
            <div className="space-y-8">
              {/* WhatsApp Contact */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Contact WhatsApp</h3>
                      <p className="text-sm text-muted-foreground">Réponse rapide garantie</p>
                    </div>
                  </div>
                  <p className="text-sm mb-6 leading-relaxed">
                    Besoin d'une réponse immédiate ? Contactez-nous directement sur WhatsApp pour une assistance rapide et personnalisée.
                  </p>
                  <Button 
                    onClick={openWhatsApp}
                    variant="construction" 
                    size="lg" 
                    className="w-full bg-green-500 hover:bg-green-600"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Ouvrir WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-lg mb-4">Notre Localisation</h3>
                  <div className="bg-secondary rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <MapPin className="h-12 w-12 text-gold mx-auto" />
                      <div>
                        <p className="font-medium">CODAM BENIN CONSULTING</p>
                        <p className="text-sm text-muted-foreground">Cotonou, Fidjrossè</p>
                        <p className="text-sm text-muted-foreground">Bénin</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://maps.google.com/?q=Cotonou,+Fidjrossè,+Bénin" target="_blank" rel="noopener noreferrer">
                          Voir sur Google Maps
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-950 dark:to-orange-900">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Urgence 24/7</h3>
                  <p className="text-sm mb-4 leading-relaxed">
                    Pour les urgences de chantier ou situations critiques
                  </p>
                  <Button variant="destructive" size="sm" className="w-full" asChild>
                    <a href="tel:+22901967576390">
                      <Phone className="mr-2 h-4 w-4" />
                      Ligne d'urgence
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;