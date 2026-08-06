import fs from 'node:fs';

const config = JSON.parse(fs.readFileSync('ops/recurring-routines.json', 'utf8'));
const expected = [
  ['daily-blog-publishing', '0 9 * * 1-5', 20, 25, 'skip_if_active', 'medium'],
  ['daily-research-publishing', '0 6 * * *', 10, 15, 'always_enqueue', 'high']
];

const fail = (message) => { throw new Error(message); };
if (config.version !== '2.4' || config.site !== 'OutsourceAccountsPayable.com' ||
    config.repository !== 'coolifystealthagents/outsourceaccountspayable' ||
    config.branch !== 'main' || config.timezone !== 'UTC') fail('identity or v2.4 settings are invalid');
if (config.coolifyDeploymentInRoutine !== false || config.googleSearchConsoleInRoutine !== false) fail('prohibited workflow enabled');
if (JSON.stringify(config.secretInjection) !== JSON.stringify(['github', 'gemini'])) fail('secret injection must be GitHub and Gemini only');
if (!Array.isArray(config.routines) || config.routines.length !== expected.length) fail('exactly two routines are required');
for (const [i, [id, cron, min, max, concurrency, priority]] of expected.entries()) {
  const r = config.routines[i];
  if (r.id !== id || r.cron !== cron || r.randomTarget.minimum !== min || r.randomTarget.maximum !== max ||
      r.concurrency !== concurrency || r.catchUp !== 'skip_missed' || r.priority !== priority) fail(`${id} schedule is invalid`);
  if (r.push.repository !== config.repository || r.push.branch !== config.branch || r.afterPush !== 'stop') fail(`${id} push boundary is invalid`);
  if (r.humanizer.source !== 'https://github.com/blader/humanizer' || r.humanizer.minimumVersion !== '2.9.1' || !r.humanizer.required) fail(`${id} humanizer gate is invalid`);
  if (!r.workflow.includes('build_and_structured_data_validation') || !r.workflow.includes('record_sha_branch_files_push_and_validation')) fail(`${id} validation/evidence steps are missing`);
}
console.log('v2.4 routine manifest: PASS');
