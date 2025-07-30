// services/fraudDetection.js

const fs = require('fs');
const path = require('path');

const phishingKeywords = fs
  .readFileSync(path.join(__dirname, '../../wordlists/phishing_keywords.txt'), 'utf-8')
  .split('\n')
  .filter(Boolean);

const scamDomains = fs
  .readFileSync(path.join(__dirname, '../../wordlists/scam_domains.txt'), 'utf-8')
  .split('\n')
  .filter(Boolean);

module.exports.analyze = async (text) => {
  const lower = text.toLowerCase();
  const reasons = [];

  for (const keyword of phishingKeywords) {
    if (lower.includes(keyword)) reasons.push(`Keyword: ${keyword}`);
  }

  for (const domain of scamDomains) {
    if (lower.includes(domain)) reasons.push(`Scam domain: ${domain}`);
  }

  return {
    flagged: reasons.length > 0,
    reasons
  };
};