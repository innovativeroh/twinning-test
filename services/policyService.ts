// services/policyService.ts
import { AllPoliciesResponse, SinglePolicyResponse, PolicyType } from '../types/policy';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL!;

export class PolicyService {
  static async getAllPolicies(): Promise<AllPoliciesResponse> {
    try {
      if (!BASE_URL || BASE_URL.includes('your-domain.com')) {
        throw new Error('API base URL is not configured. Please set NEXT_PUBLIC_BACKEND_API_URL in your .env file.');
      }

      const response = await fetch(`${BASE_URL}/policies`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching all policies:', error);
      throw error;
    }
  }

  static async getPolicyByType(type: PolicyType): Promise<SinglePolicyResponse> {
    try {
      if (!BASE_URL || BASE_URL.includes('your-domain.com')) {
        throw new Error('API base URL is not configured. Please set NEXT_PUBLIC_BACKEND_API_URL in your .env file.');
      }

      const response = await fetch(`${BASE_URL}/policy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${type} policy:`, error);
      throw error;
    }
  }
}
