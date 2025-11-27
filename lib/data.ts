import { LucideIcon, Cpu, Shield, Sparkles, Workflow, Globe, Database, Zap, Infinity as InfinityIcon, Cloud, Lock, Code, SignalHigh } from 'lucide-react';

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  metric: string;
  highlights: string[];
};

export const features: Feature[] = [
  {
    title: 'Realtime Inference',
    description: 'Millisecond inference with automatic batching, streaming, and hallucination guardrails for production-grade deployments.',
    icon: Zap,
    metric: '2ms median latency',
    highlights: ['Adaptive batching', 'Streaming tokens', 'Retrieval fusion'],
  },
  {
    title: 'Cortex Security',
    description: 'Hardware-level encryption, threat detection, and compliant data residency to protect sensitive AI workloads.',
    icon: Shield,
    metric: 'SOC 2 Type II',
    highlights: ['Field-level encryption', 'PII scrubbing', 'Realtime audit logs'],
  },
  {
    title: 'Unified Intelligence',
    description: 'Chain reasoning, multimodal inputs, and vector-native cognition fused into a single programmable API surface.',
    icon: Sparkles,
    metric: '12+ AI modalities',
    highlights: ['Vision + text', 'Graph embeddings', 'Agent toolkit'],
  },
  {
    title: 'Edge Orchestration',
    description: 'Scale inference across edge clusters with deterministic rollouts, GPU sharing, and predictive auto-scaling.',
    icon: Workflow,
    metric: '99.999% uptime',
    highlights: ['Zero-downtime updates', 'GPU pooling', 'Intent-based routing'],
  },
];

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  latency: string;
};

export const capabilities: Capability[] = [
  {
    title: 'Neural Embeddings',
    description: 'High-dimensional embeddings with deterministic drift control for vector databases and search.',
    icon: Database,
    badge: 'Vector v3',
    latency: '11ms average',
  },
  {
    title: 'Autonomous Agents',
    description: 'Composable agents with tool invocation, memory graphs, and multi-hop planning.',
    icon: InfinityIcon,
    badge: 'Agents beta',
    latency: '148 tokens/s',
  },
  {
    title: 'Global Routing',
    description: 'Geo-aware routing mesh with programmable SLAs and adaptive replication.',
    icon: Globe,
    badge: 'Edge mesh',
    latency: '22 regions',
  },
  {
    title: 'Predictive Guardrails',
    description: 'Contextual policy engine with semantic diffing, jailbreak detection, and auto-remediation.',
    icon: Shield,
    badge: 'Secure v2',
    latency: 'auto',
  },
];

export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  highlight: string;
  cta: string;
  popular?: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Build',
    description: 'For teams prototyping AI capabilities with generous free tier limits.',
    price: '$0',
    highlight: 'Up to 3M tokens/mo',
    cta: 'Start building',
    features: ['Dedicated sandbox key', 'Community support', 'Latency insights'],
  },
  {
    name: 'Scale',
    description: 'Best for product teams shipping AI to thousands of users.',
    price: '$1490',
    highlight: 'Priority routing & SLA',
    popular: true,
    cta: 'Launch with Scale',
    features: ['Dedicated GPU pools', 'Realtime guardrails', '24/7 expert support', 'Hybrid deployments'],
  },
  {
    name: 'Enterprise',
    description: 'Custom architectures, on-prem control planes, and compliance automation.',
    price: 'Talk to us',
    highlight: 'Private regions & air-gapped',
    cta: 'Design your stack',
    features: ['Joint roadmap', 'Red-team simulations', 'Field-level encryption', 'White-glove onboarding'],
  },
];

export type DocSection = {
  title: string;
  description: string;
  code: string;
  endpoints: Array<{ method: 'GET' | 'POST' | 'DELETE'; path: string; latency: string }>;
};

export const docsSections: DocSection[] = [
  {
    title: 'Realtime Inference',
    description: 'Stream blazing-fast completions with deterministic temperature controls.',
    code: `curl https://api.neuralapi.ai/v1/infer \\\n  -H "Authorization: Bearer $NEURAL_KEY" \\\n  -H "X-Model: cortex-ultra" \\\n  -d '{"prompt": "Explain the topology of quantum transformers"}'`,
    endpoints: [
      { method: 'POST', path: '/v1/infer', latency: 'p95 38ms' },
      { method: 'GET', path: '/v1/models', latency: 'cached' },
    ],
  },
  {
    title: 'Embeddings',
    description: 'Create vector representations with self-healing token normalization.',
    code: `await client.embeddings.create({\n  model: 'vector-neon',\n  input: docs,\n  normalize: true,\n});`,
    endpoints: [
      { method: 'POST', path: '/v1/embeddings', latency: '11ms avg' },
      { method: 'DELETE', path: '/v1/embeddings/:id', latency: 'async' },
    ],
  },
  {
    title: 'Agents',
    description: 'Chain tasks, tools, and policies into resilient autonomous workflows.',
    code: `const agent = await client.agents.create({\n  name: 'Navigator',\n  tools: ['http', 'db', 'llm'],\n  policy: 'strict',\n});`,
    endpoints: [
      { method: 'POST', path: '/v1/agents', latency: 'plan 78ms' },
      { method: 'POST', path: '/v1/agents/:id/invoke', latency: 'token streaming' },
    ],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  logo: string;
  metric: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: 'NeuralAPI became our AI nervous system. Latency dropped 82% and we ship new agents weekly.',
    author: 'Solomon Reyes',
    role: 'CTO, Halo Systems',
    logo: 'Halo',
    metric: '82% faster',
  },
  {
    quote: 'The documentation is pristine and the 3D observability console makes debugging delightful.',
    author: 'Camila Park',
    role: 'Head of Platform, Arclight',
    logo: 'Arclight',
    metric: '4x productivity',
  },
  {
    quote: 'Enterprise guardrails satisfied legal in a single review. NeuralAPI is our competitive edge.',
    author: 'Nadia Jones',
    role: 'VP Security, Vanta Labs',
    logo: 'Vanta',
    metric: 'Zero incidents',
  },
];

export const heroStats = [
  { label: 'Latency (p95)', value: '38 ms' },
  { label: 'Inference per day', value: '2.4B' },
  { label: 'Global POPs', value: '22' },
  { label: 'Developers onboarded', value: '19k+' },
];
