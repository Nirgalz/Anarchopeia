# Editorial workflow — working rules

**Scope:** every substantive proposed addition or change to the manifesto, including its **aims, principles and definitions**, must be evaluated as a proposal.

This document records the workflow discussed with the initiator on 16 November 2026. The project is currently maintained by one person; its future governance and the approval procedure remain revisable.

## Roles of documents

- **Proposal:** complete argument and evidence record, including research, references, criticism, evaluation, a proposed manifesto entry and history in a **single document**.
- **Manifesto:** concise synthesis of **approved** proposal versions with links to the full records. It should remain readable without duplicating all research.
- **GitHub Issues / PRs:** discussion and proposed changes; Git history retains prior versions.
- **Historical notes:** removed from the active tree; earlier versions may remain cited via immutable Git commits, without implying adoption.

## Three status values

| Status | Meaning | Manifesto effect |
| --- | --- | --- |
| `in_progress` | Drafting, researching or revising a candidate | None |
| `awaiting_approval` | Candidate submitted for an editorial decision | None |
| `approved` | A **specific version** accepted in a recorded decision | Publish/update its proposed entry in the manifesto |

### First approval

`in_progress` → `awaiting_approval` → `approved`.

A proposal should state its ID, working version, status, approval record and related manifesto entry. Marking a document `approved` is a deliberate editorial decision, not a side effect of creating or merging a draft.

### Revision of an approved proposal

**The last approved version and its manifesto entry stay in force** while a candidate revision is `in_progress` or `awaiting_approval`. Work on revisions in a branch/PR so that the approved main-branch version remains stable. After review, an approved revision replaces the previous manifesto entry and updates the proposal version and revision history together. **“Revision approved” is an event, not a separate status.** Unaccepted changes do not replace the approved text.

A proposal may also be withdrawn, superseded or rejected; document the decision and affected manifesto entry. These are decision outcomes, **not additional routine lifecycle statuses**.

### Who approves?

**Currently, the project initiator acts as sole editorial approver** because there are no other active decision-makers. This must not be presented as collective ratification. Record the date, approving authority, rationale, alternatives, objections and links to the decision PR. Approval means **accepted into the current working manifesto**, not verified truth or unanimous agreement. The procedure itself can later be revised through a proposal.

## Required section order

1. **Problem**
2. **Objectives**
3. **Proposal**
4. **Alternatives**
5. **Criticism and limitations**
6. **Evaluation**
7. **Proposed Manifesto Entry** — publication-ready text proposed for the manifesto if approved; placed immediately after evaluation
8. **Research** — extended reasoning, evidence and outstanding questions
9. **References** — complete sources and their limitations, when verified
10. **Revision history**

**Research belongs after Evaluation and before References**, with Proposed Manifesto Entry directly after Evaluation. Keep all ten within each proposal, including those about foundational definitions. The candidate entry states the proposed manifesto content directly; it is **not a summary of the reasoning**, and is incorporated only after explicit approval. Cite sources where claims occur; the references section collects their details. Clearly label unverified reading leads.

See the [template](PROPOSAL_TEMPLATE.md) and [proposal catalogue](proposals/README.md).

## Versions, publication and translations

- Each proposal has a stable ID, e.g. `AP-0001`. A working version such as `0.1` is not an approved version.
- The approved version should be recorded by version identifier **and** Git commit/PR link so it can be reconstructed.
- English is the canonical editorial wording; French is maintained in parallel. New languages use the same numbered directory and a BCP 47 language-tagged file.
- An approved change is integrated into `manifesto/en.md`, with matching translations updated or marked for review. Do not invent a translation or let it silently diverge.
- `main` is the default working branch. Create each new proposal directly on `main` with status `in_progress`, without creating a dedicated branch.
- Draft **revisions of already approved** files should be isolated in branches until approved.
- Changes to this workflow or approval authority must themselves follow the proposal process.

## Quality checks before approval

Can readers identify a clear claim and purpose? Are alternative mechanisms and counterarguments fairly considered? Are normative claims distinguished from empirical assertions? Are the relevant sources and limitations visible? Are affected persons, possible harms, and practical contestation addressed where relevant? Is the proposed manifesto entry self-contained, directly publishable, and consistent with the supporting proposal? Can the decision and translations be traced?
