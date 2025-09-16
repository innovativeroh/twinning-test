// types/policy.ts
export interface PolicyDocument {
  id: string;
  type: 'privacy_policy' | 'terms_and_conditions' | 'data_processing_agreement';
  version: number;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface AllPoliciesResponse {
  privacy_policy: PolicyDocument;
  terms_and_conditions: PolicyDocument;
  data_processing_agreement: PolicyDocument;
}

export interface SinglePolicyResponse {
  success: boolean;
  data: PolicyDocument;
  timestamp: string;
}

export type PolicyType = 'privacy_policy' | 'terms_and_conditions' | 'data_processing_agreement';
