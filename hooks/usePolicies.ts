// hooks/usePolicies.ts
import { useState, useEffect } from 'react';
import { PolicyService } from '@/services/policyService';
import { AllPoliciesResponse, SinglePolicyResponse, PolicyType } from '../types/policy';

export const useAllPolicies = () => {
  const [data, setData] = useState<AllPoliciesResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        setLoading(true);
        const policies = await PolicyService.getAllPolicies();
        setData(policies);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, []);

  return { data, loading, error };
};

export const usePolicy = (type: PolicyType) => {
  const [data, setData] = useState<SinglePolicyResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        setLoading(true);
        const policy = await PolicyService.getPolicyByType(type);
        setData(policy);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (type) {
      fetchPolicy();
    }
  }, [type]);

  return { data, loading, error };
};
