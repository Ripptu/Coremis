import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const ProblemSolution: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          {t('prob.title')}
        </h2>
        <div className="prose prose-lg mx-auto text-slate-600 leading-relaxed">
          <p className="mb-6">
            {t('prob.text1')}
          </p>
          <p className="font-medium text-slate-900">
            {t('prob.text2')}
          </p>
        </div>
      </div>
    </section>
  );
};