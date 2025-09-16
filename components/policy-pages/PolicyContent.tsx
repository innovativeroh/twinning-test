// components/PolicyContent.tsx
import React from 'react';
import { PolicyDocument } from '@/types/policy';

interface PolicyContentProps {
  policy: PolicyDocument;
}

const PolicyContent: React.FC<PolicyContentProps> = ({ policy }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatPolicyType = (type: string) => {
    return type
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16 lg:mb-20">
        <h1 className="text-4xl md:text-6xl font-extralight mb-6 text-white tracking-tight">
          {formatPolicyType(policy.type)}
        </h1>
        <div className="w-24 h-1 bg-white/10 rounded-full mx-auto mb-8"></div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/70 text-sm font-light">
          <span>Version {policy.version}</span>
          <span className="hidden sm:block">•</span>
          <span>Last updated: {formatDate(policy.updated_at)}</span>
          <span className="hidden sm:block">•</span>
          <span>Created: {formatDate(policy.created_at)}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full p-8 lg:p-12 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
        <div 
          className="prose prose-invert prose-lg max-w-none 
                     prose-headings:text-white prose-headings:font-light prose-headings:tracking-wide
                     prose-p:text-white/80 prose-p:font-light prose-p:leading-relaxed
                     prose-li:text-white/80 prose-li:font-light
                     prose-strong:text-white prose-strong:font-medium
                     prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
                     prose-ul:text-white/80 prose-ol:text-white/80
                     prose-blockquote:text-white/70 prose-blockquote:border-white/20
                     prose-hr:border-white/10"
          dangerouslySetInnerHTML={{ __html: policy.content }}
        />
      </div>
    </div>
  );
};

export default PolicyContent;
