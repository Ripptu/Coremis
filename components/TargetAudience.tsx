import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const TargetAudience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">{t('target.title1')}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                    {t('target.desc1a')}
                </p>
                <p className="text-slate-600 leading-relaxed">
                    {t('target.desc1b')}
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-opacity-50">{t('target.title2')}</h3>
                <p className="text-slate-500 leading-relaxed mb-4">
                   {t('target.desc2a')}
                </p>
                <p className="text-slate-500 leading-relaxed">
                   {t('target.desc2b')}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};