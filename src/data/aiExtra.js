// Page copy for the individual AI pages: outcomes, deliverables, timeline, risks and FAQs.
const r = (risk, control) => ({ risk, control })
const p = (phase, time, text) => ({ phase, time, text })

const STD_PHASES = [
  p('Discover', '1 week', 'Pick the use case, check data access and agree the pass mark.'),
  p('Prove', '2 to 4 weeks', 'Build a working pilot on your data and measure it against the pass mark.'),
  p('Build', '6 to 12 weeks', 'Production code, integrations, access control and evaluation suite.'),
  p('Operate', 'Ongoing', 'Monitoring for quality, cost and drift, with regular reviews.'),
]

export const aiExtra = {
  'custom-ai-services': {
    outcome: 'A model or assistant trained or configured for your data and your process, with measured accuracy and a clear owner.',
    bestFor: ['A repeated decision that is slow or inconsistent today', 'Data you already collect but do not use', 'A process where a draft answer plus human review saves hours'],
    deliverables: ['Use-case brief with pass mark', 'Working pilot and evaluation report', 'Production service with API and dashboards', 'Runbook and handover training'],
    phases: STD_PHASES,
    risks: [r('Poor or missing data', 'Data audit in week one; we say early if the data cannot support the goal.'), r('Model drift', 'Monitoring and scheduled re-evaluation.'), r('Unclear ownership', 'A named business owner and review cadence.')],
    faq: [
      { q: 'How do we know if our idea is feasible?', a: 'We test it on a sample of your data in a short pilot with a written pass mark. If it fails, you have spent weeks, not months.' },
      { q: 'Do we need a lot of data?', a: 'Not always. Pretrained models and retrieval need far less than training from scratch. We tell you what the approach requires.' },
    ],
  },
  'nlp-solutions': {
    outcome: 'Systems that read, classify, search and answer from text, in the languages your customers use.',
    bestFor: ['Support teams answering repeated questions', 'Document-heavy teams in legal, finance or HR', 'Products that need search or summaries over text'],
    deliverables: ['Intent and entity model or LLM prompts with tests', 'Retrieval index over your documents', 'Chat or API interface', 'Language coverage report'],
    phases: STD_PHASES,
    risks: [r('Wrong or invented answers', 'Answers cite sources; low-confidence cases go to a person.'), r('Language gaps', 'Per-language test sets, including Hindi and mixed-language input where needed.'), r('Sensitive text in prompts', 'Redaction and private endpoints.')],
    faq: [
      { q: 'Can it understand Hindi, Gujarati or Hinglish?', a: 'Modern models handle many Indian languages, with varying quality. We test your languages on real examples before promising results.' },
      { q: 'Will it replace our support team?', a: 'It handles common questions and drafts replies. People stay in the loop for complex or sensitive cases.' },
    ],
  },
  'computer-vision-services': {
    outcome: 'Cameras and photos turned into counts, checks and alerts, running in the cloud or on the device.',
    bestFor: ['Quality inspection on a production line', 'Counting or tracking in warehouses and retail', 'Document and ID capture in apps'],
    deliverables: ['Labelled dataset and labelling guide', 'Trained model with accuracy by class', 'Edge or cloud deployment', 'Review tool for uncertain cases'],
    phases: [p('Capture', '1 to 2 weeks', 'Collect sample images in real conditions and define classes.'), p('Prove', '3 to 4 weeks', 'Train and test on held-out images.'), p('Deploy', '6 to 10 weeks', 'Integrate with cameras, lighting and your systems.'), p('Operate', 'Ongoing', 'Track accuracy as conditions change.')],
    risks: [r('Lighting and angle changes', 'Training on varied real conditions and periodic retests.'), r('Privacy of people in frame', 'Blur or on-device processing; clear signage and retention limits.'), r('Rare defects', 'Targeted data collection and anomaly detection.')],
    faq: [
      { q: 'How many images do we need?', a: 'Often a few hundred per class to start, more for rare or subtle defects. A pilot tells us what is enough.' },
      { q: 'Can it run without internet?', a: 'Yes. Models can run on edge devices at the site and sync results when connected.' },
    ],
  },
  'generative-ai-solutions': {
    outcome: 'Assistants and content tools that draft, summarise and answer, grounded in your approved material.',
    bestFor: ['Teams that write the same kinds of documents repeatedly', 'Knowledge bases that staff cannot search well', 'Product features that generate text, images or code'],
    deliverables: ['Prompt and retrieval design', 'Evaluation set with scoring', 'Guardrails and approval workflow', 'Usage and cost dashboard'],
    phases: STD_PHASES,
    risks: [r('Hallucinated content', 'Grounding in sources, citations and human approval for publication.'), r('Prompt injection and data leaks', 'Input filtering, scoped tools and permission checks.'), r('Runaway cost', 'Caching, smaller models where possible, budget alerts.')],
    faq: [
      { q: 'Which model will you use?', a: 'The smallest one that meets your quality bar. We compare hosted and open-weight models on your test set and show the cost per task.' },
      { q: 'Can we keep our data private?', a: 'Yes. We use enterprise endpoints with no training on your data, or models hosted inside your own cloud account.' },
    ],
  },
  'data-science-analytics': {
    outcome: 'Clean data, trustworthy dashboards and forecasts that decision-makers actually use.',
    bestFor: ['Teams with data in many spreadsheets and systems', 'Forecasting demand, churn or revenue', 'Leaders who need one agreed set of numbers'],
    deliverables: ['Data model and pipelines', 'Dashboards with agreed definitions', 'Forecast or segmentation models', 'Metric dictionary'],
    phases: [p('Audit', '1 to 2 weeks', 'Map sources, quality and the decisions the data should support.'), p('Model', '3 to 6 weeks', 'Build the pipeline and first dashboards.'), p('Predict', '4 to 8 weeks', 'Add forecasts and test them against history.'), p('Operate', 'Ongoing', 'Data quality checks and new questions.')],
    risks: [r('Conflicting definitions', 'A shared metric dictionary signed off by owners.'), r('Bad source data', 'Automated quality tests that alert before reports go out.'), r('Dashboards nobody opens', 'Built around real decisions and reviewed after launch.')],
    faq: [
      { q: 'Do we need a data warehouse first?', a: 'Often yes, but it can be small. We start with the questions and size the warehouse to match.' },
      { q: 'Which BI tools do you use?', a: 'Power BI, Looker Studio, Metabase, Tableau or custom dashboards, chosen to fit your team and budget.' },
    ],
  },
  'ai-tech-stack': {
    outcome: 'An AI platform your team can build on: compute, data, serving and monitoring that scale with usage.',
    bestFor: ['Teams moving from notebooks to production', 'Companies running several AI features at once', 'Organisations that must keep models in their own cloud'],
    deliverables: ['Reference architecture', 'Infrastructure as code', 'Model serving with autoscaling', 'Observability and cost controls'],
    phases: [p('Assess', '1 to 2 weeks', 'Review workloads, data location and security needs.'), p('Design', '2 weeks', 'Choose components and write the architecture.'), p('Build', '4 to 10 weeks', 'Provision, deploy and migrate the first workloads.'), p('Operate', 'Ongoing', 'Capacity, cost and upgrades.')],
    risks: [r('GPU cost overruns', 'Right-sizing, spot capacity and scale-to-zero serving.'), r('Vendor lock-in', 'Open standards and portable containers.'), r('Security gaps', 'Network isolation, secrets management and audit logs.')],
    faq: [
      { q: 'Cloud or on-premises?', a: 'Cloud is faster to start. On-premises or private cloud makes sense for steady heavy load or strict data rules. We cost both.' },
      { q: 'Do we need GPUs?', a: 'Not for many workloads. Hosted model APIs and small models run without them. We size to your actual usage.' },
    ],
  },
  'ai-agents': {
    outcome: 'Agents that complete multi-step tasks through your tools, inside limits you set and with a full record of every step.',
    bestFor: ['Support, operations or back-office work with clear rules', 'Tasks that today need several clicks across systems', 'Teams ready to start with drafts and widen autonomy over time'],
    deliverables: ['Tool definitions with scopes and limits', 'Policy layer and approval rules', 'Run logs with replay', 'Evaluation scenarios for the agent'],
    phases: STD_PHASES,
    risks: [r('Wrong action taken', 'Narrow tools, spend limits and human approval for risky steps.'), r('Loops and runaway cost', 'Step and budget caps per run.'), r('Hard-to-audit behaviour', 'Every step logged and replayable.')],
    faq: [
      { q: 'How much can an agent do on its own?', a: 'Only what you allow. We start with drafts and suggestions, then enable actions one at a time as measured accuracy supports it.' },
      { q: 'What systems can agents connect to?', a: 'Anything with an API: CRMs, help desks, ERPs, databases and internal tools. Each connection gets its own permissions.' },
    ],
  },
  'ai-operations': {
    outcome: 'AI in production that stays accurate, affordable and compliant after launch.',
    bestFor: ['Teams with models live but no monitoring', 'Companies whose AI bills are growing without clear value', 'Organisations preparing for audits'],
    deliverables: ['Quality, drift and cost dashboards', 'Automated evaluation and retraining pipelines', 'Incident runbooks', 'Governance records'],
    phases: [p('Baseline', '1 to 2 weeks', 'Measure current quality, cost and incidents.'), p('Instrument', '2 to 4 weeks', 'Add tracing, evaluation and alerts.'), p('Automate', '4 to 8 weeks', 'Pipelines for tests, retraining and release.'), p('Review', 'Monthly', 'Quality and cost reviews with owners.')],
    risks: [r('Silent quality decline', 'Continuous evaluation on live samples.'), r('Cost creep', 'Per-feature cost tracking and budget alerts.'), r('Audit gaps', 'Versioned models, prompts and data lineage.')],
    faq: [
      { q: 'What is the difference between MLOps and LLMOps?', a: 'MLOps manages trained models and data pipelines. LLMOps adds prompt versions, retrieval quality, safety tests and token cost. We cover both.' },
      { q: 'Can you take over a system someone else built?', a: 'Yes. We start with a review of what exists, then add monitoring before changing anything.' },
    ],
  },
  'machine-learning': {
    outcome: 'Models that predict, rank or classify from your data, validated honestly and deployed where they are used.',
    bestFor: ['Forecasting demand, churn or risk', 'Scoring leads, claims or transactions', 'Ranking and recommendation'],
    deliverables: ['Feature pipeline', 'Trained and validated models', 'Prediction API or batch jobs', 'Model card with limits'],
    phases: STD_PHASES,
    risks: [r('Leakage that inflates accuracy', 'Time-based validation and review of every feature.'), r('Bias in decisions', 'Subgroup testing and documented limits.'), r('Models nobody trusts', 'Explanations and side-by-side comparison with current practice.')],
    faq: [
      { q: 'How accurate will it be?', a: 'We cannot promise a number before seeing your data. The pilot measures accuracy on held-out history so you decide with evidence.' },
      { q: 'Do we need a data scientist on our side?', a: 'No, but a business owner who knows the process is essential. We train your team to run what we build.' },
    ],
  },
  'ai-ml-overview': {
    outcome: 'A clear view of where AI will pay off for you, what it needs and in what order to do it.',
    bestFor: ['Leaders deciding where to invest in AI', 'Teams with many ideas and no ranking', 'Boards asking about risk and readiness'],
    deliverables: ['Readiness assessment', 'Scored use-case portfolio', '12-month roadmap', 'Risk and governance outline'],
    phases: [p('Interview', '1 week', 'Talk to leaders and teams about goals and constraints.'), p('Assess', '1 to 2 weeks', 'Review data, tools and skills.'), p('Prioritise', '1 week', 'Score ideas by value, effort and risk.'), p('Plan', '1 week', 'Roadmap, budget ranges and first pilot brief.')],
    risks: [r('Chasing hype', 'Every idea is scored against a business metric.'), r('Underestimating data work', 'Data readiness is assessed before any estimate.'), r('No owner', 'Each roadmap item has a named business owner.')],
    faq: [
      { q: 'How long does the assessment take?', a: 'Usually three to five weeks, depending on the size of the organisation.' },
      { q: 'Is the roadmap tied to your services?', a: 'No. You can run it with your own team or other partners. We recommend what fits, including not using AI where it does not pay.' },
    ],
  },
  'transform-business': {
    outcome: 'Core workflows rebuilt around data and automation, one process at a time, without stopping the business.',
    bestFor: ['Companies with manual, spreadsheet-driven operations', 'Legacy systems that block new products', 'Leadership teams that want measurable change in a year'],
    deliverables: ['Process maps with baseline metrics', 'Automation and integration builds', 'Change plan and training', 'Benefits tracking'],
    phases: [p('Map', '2 to 3 weeks', 'Document the current process and measure it.'), p('Redesign', '2 weeks', 'Decide what to automate, simplify or remove.'), p('Build', '6 to 16 weeks', 'Deliver in small releases, each live in production.'), p('Embed', 'Ongoing', 'Training, support and benefit tracking.')],
    risks: [r('Staff resistance', 'Involve users from design; train before each release.'), r('Big-bang failure', 'Small releases, each reversible.'), r('Benefits not realised', 'Baseline metrics agreed upfront and reviewed.')],
    faq: [
      { q: 'Do we have to replace our legacy systems?', a: 'Not necessarily. We often wrap them with APIs and replace parts over time, starting where value is highest.' },
      { q: 'How do you measure success?', a: 'We agree baseline metrics such as cycle time, error rate and cost per transaction before we start, then report against them.' },
    ],
  },
  'ai-ml-models': {
    outcome: 'Models hosted, versioned and served reliably, whether you run your own or use hosted APIs.',
    bestFor: ['Teams that need private model hosting', 'Products calling several models', 'Companies fine-tuning for a narrow task'],
    deliverables: ['Model selection report with cost and quality', 'Hosted endpoints or managed API gateway', 'Fine-tuning pipeline where justified', 'Versioning and rollback'],
    phases: [p('Compare', '1 to 2 weeks', 'Test candidate models on your task.'), p('Deploy', '2 to 4 weeks', 'Serve the chosen model with scaling and auth.'), p('Tune', '3 to 6 weeks', 'Fine-tune only if it beats prompting on your test set.'), p('Operate', 'Ongoing', 'Version updates, monitoring and cost review.')],
    risks: [r('Model licence limits', 'Licence review before selection.'), r('Latency under load', 'Load testing and autoscaling.'), r('Fine-tune that does not help', 'Only tune after a measured gap to prompting and retrieval.')],
    faq: [
      { q: 'Should we fine-tune or use prompting?', a: 'Start with prompting and retrieval. Fine-tune when a measured gap remains on your test set and you have enough clean examples.' },
      { q: 'Can we switch models later?', a: 'Yes. We put a gateway in front so changing models is a configuration change, with tests to protect quality.' },
    ],
  },
}
