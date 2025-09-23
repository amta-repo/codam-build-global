import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: any;
    title: string;
    description: string;
    features: string[];
    color: string;
    benefits?: string[];
    process?: string[];
  } | null;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ isOpen, onClose, service }) => {
  const { t } = useLanguage();

  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white flex-shrink-0`}>
              <service.icon className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-left">
                {service.title}
              </DialogTitle>
              <DialogDescription className="text-base leading-relaxed mt-2">
                {service.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Features */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-gold mr-2" />
                Services Inclus
              </h3>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {service.benefits && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Avantages Clés</h3>
                <div className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Process or Additional Info */}
          <div className="space-y-6">
            {service.process && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Notre Processus</h3>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-secondary rounded-lg p-6 space-y-4">
              <h4 className="font-semibold">Besoin de ce service ?</h4>
              <p className="text-sm text-muted-foreground">
                Contactez-nous pour une consultation gratuite et un devis personnalisé
              </p>
              <div className="flex flex-col space-y-2">
                <Button variant="gold" size="sm" asChild>
                  <Link to="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Demander un Devis
                  </Link>
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="mr-2 h-4 w-4" />
                  +229 01 96 75 76 39
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-8 pt-6 border-t">
          <Button variant="outline" onClick={onClose}>
            Fermer
          </Button>
          <Button variant="hero" asChild>
            <Link to="/contact">
              Commencer le Projet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;