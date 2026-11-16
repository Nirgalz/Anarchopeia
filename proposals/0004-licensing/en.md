<!-- Proposal AP-0004. Canonical editorial version; publication of this draft is not license adoption. -->

# Licensing and contributors' rights

| Field | Value |
| --- | --- |
| ID | AP-0004 |
| Primary category | [Anarchopeia](../categories/anarchopeia/en.md) (`anarchopeia`) |
| Secondary categories | None |
| Status | `in_progress` |
| Working version | 0.1 |
| Approved version | None |
| Scope | Editorial licensing, authors' rights and commercial permissions |
| Decision record | None |
| Translation | [Français](fr.md) |

**Status note:** The project initiator has expressed a preference for excluding unauthorized outside commercial exploitation. This document proposes how that objective might be implemented. **No license has been adopted or applied to the repository by this proposal.**

## Problem

Anarchopoeia seeks broad circulation, translation, criticism and adaptation of its political and editorial work, while **preventing outside commercial exploitation without prior authorization**. A public license must reconcile those aims with copyright law, the rights of future contributors, and the project's currently individual editorial governance.

No license is currently declared in the repository. The status of older notes and third-party material must not be changed implicitly.

## Objectives

- Enable noncommercial copying, redistribution, translation and adaptation, with attribution and reciprocal licensing of adaptations.
- Require separate authorization for commercial uses of protected content by third parties.
- Preserve contributors' authorship and their legal rights.
- Establish a legitimate, transparent and reviewable process for any commercial permissions involving multiple contributors.
- Avoid falsely representing the project as already collectively governed or the entire repository as automatically covered.
- Maintain a clear distinction between the license for **textual expression** and the free circulation of **ideas**.

## Proposal

### 1. Public license

Subject to approval and a rights audit, publish **original, rights-cleared editorial material** under **Creative Commons Attribution–NonCommercial–ShareAlike 4.0 International (CC BY-NC-SA 4.0)**.

The license permits noncommercial redistribution and adapted versions, including translations, provided its requirements are met: appropriate attribution, indication of changes, link to the license, and ShareAlike for distributed adaptations.

Commercial uses of material protected by copyright are **not granted** by this public license; they require separate authorization from the relevant rights holders. The license does not override statutory exceptions, nor does it claim ownership of ideas or factual information.

The license is non-exclusive and irrevocable for recipients who continue to comply with its terms. A rights holder may separately authorize commercial reuse; such permission is **not itself a modification of the CC license**.

### 2. Scope and exclusions

The proposed initial scope is:
- Approved, rights-cleared **manifesto** text.
- Rights-cleared **proposal** texts, including drafts and research sections, once the license is actually applied and contributors' permissions are verified.
- Original project-authored **editorial documentation**, subject to confirming authorship and rights.

This does **not** automatically include:
- The historical `txt/` directory, which remains unchanged and outside the proposed initial licensing scope until separately reviewed.
- Quotations, photographs, diagrams, other third-party works or material with incompatible licenses. Mark them and their terms explicitly.
- Future software or executable code, which should use a suitable software license if introduced.
- Content for which the project lacks documented authorization to license.

Publishing this proposal or merging it into `main` is **not** the act that applies a license. Once explicitly approved and rights cleared, implementation would require a precise `LICENSE` / `LICENSE.md` notice, an unambiguous scope notice (including exclusions), and updated `README` and contribution guidance in the project's supported languages.

### 3. Contributors' rights

Each contributor retains the copyright they hold, subject to applicable law. Submission through GitHub alone must **not** be treated as a transfer of ownership or as a blanket grant of commercial rights.

Before accepting copyrightable contributions for publication under the project license, obtain a clear, documented authorization to distribute those contributions under CC BY-NC-SA 4.0, with due attribution and acknowledgment of known third-party restrictions.

**Collective commercial reuse is a separate question.** The proposed public license does not automatically empower a founder, repository maintainer or informal collective to commercially exploit contributions owned by others. Such use must rely on permission from the relevant rights holders or a valid, sufficiently defined mandate/agreement. The default, pending a contributor-rights framework, is **case-by-case permission**, not an automatic grant to the project.

A future contributor agreement may define a non-exclusive commercial mandate for a legally identifiable individual or entity, its specific rights and uses, territory, duration, remuneration (if any), decision procedure, revocation/termination terms where applicable, audit rights and dispute handling. It must be reviewed for compliance with applicable law before use. No general assignment of future works is presumed.

### 4. Commercial permissions and governance

Until a governance mechanism is adopted, maintainers should **not** present themselves as empowered to license third parties' contributions commercially. For uses touching more than one rights holder, all legally necessary authorizations must be obtained.

A later proposal should define who can represent the contributors, who decides whether commercial permission is given, the permissible uses, the treatment and transparency of revenue, conflicts of interest, independent review and effective avenues of challenge.

Granting one commercial authorization does not remove the public's continuing noncommercial rights under CC BY-NC-SA.

## Alternatives

- **CC BY-SA 4.0:** permits commercial reuse without separate authorization; maximizes reuse but does not meet the stated restriction.
- **CC BY-NC 4.0:** prevents unauthorized commercial reuse but removes the ShareAlike condition for adaptations.
- **CC0:** maximizes unrestricted reuse but provides no restriction on commercial reproduction.
- **Custom license:** may provide finer restrictions but creates interpretation, enforceability and compatibility costs; not recommended without specialist review.
- **No public license:** leaves ordinary copyright restrictions in place, including on noncommercial adaptations; less suitable for an evolving public manifesto.

## Criticism and limitations

- **NonCommercial is not determined by organizational status.** A nonprofit may conduct a commercial use and a business may conduct noncommercial activity. Advertising, paid courses, cost-recovery publishing and mixed-use cases can require fact-specific interpretation or additional permission.
- This license would not qualify as a **free cultural license** under standard definitions that require commercial reuse rights, and it may reduce reuse and interoperability with CC BY-SA ecosystems.
- Copyright does **not** generally protect abstract political ideas, methods or facts. Reimplementation of an idea without copying protected expression may fall outside this license.
- Rights holders may not always be obvious: joint works, composite works, preexisting third-party material and translation rights require review.
- The project currently has **no constituted collective legal entity or contributor commercial mandate**. Commercial rights cannot be delegated by editorial assertion alone.
- Granting CC permissions is generally irrevocable as to compliant downstream recipients; adoption should follow rights checks.
- Retaining centralized permission to commercialize could create unaccountable discretionary power. Commercial governance must remain reviewable and contestable.

## Evaluation

Before seeking approval:
- Verify authorship and the licensing eligibility of each initial file; maintain a list of exclusions and third-party notices.
- Check that `txt/` and any future code remain outside the declared CC scope.
- Determine whether the intended restriction is well served by CC BY-NC-SA compared with CC BY-NC and CC BY-SA.
- Obtain an appropriate legal review of contributors' permissions, particularly the implications of French law for joint authorship and commercial exploitation.
- Specify how existing contributors and future contributors will give **informed, recorded consent** for licensing; distinguish public noncommercial permission from separate commercial permissions.
- Ensure no public documentation implies that this proposed license is already operative.
- If approved, verify the license notice, attribution practices, translation consistency, and reference to the exact CC 4.0 legal text.

**Approval is conditional on a separate, documented implementation step** and sufficient rights to license the included works; the proposal itself must not change the rights status of legacy or third-party material.

## Proposed Manifesto Entry

Anarchopoeia makes its original editorial texts available for noncommercial sharing, translation and adaptation under the **Creative Commons Attribution–NonCommercial–ShareAlike 4.0 International (CC BY-NC-SA 4.0)** license, with attribution and the obligation to share adaptations under the same conditions.

**Commercial use of the protected texts requires separate authorization from the relevant rights holders.** Contributors retain their rights. Any commercial exploitation of joint or contributed works by the project or an affiliated collective requires the necessary authorizations and transparent, contestable decision-making arrangements.

This license covers only materials expressly identified as included; third-party content and historical notes are not automatically licensed. It does not restrict the use of ideas or uses permitted independently by law.

## Research

### Meaning and effects of BY-NC-SA

Creative Commons defines NonCommercial as use not *primarily intended for or directed towards commercial advantage or monetary compensation*. Its legal code grants permissions for noncommercial reproduction and adaptation, preserves statutory exceptions, and defines attribution, ShareAlike and non-exclusive, irrevocable licensing. The practical boundary of mixed commercial/noncommercial uses is context-dependent. [CC BY-NC-SA 4.0 legal code](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode).

Creative Commons explicitly recognizes that licensors may offer **separate commercial permissions** alongside a NonCommercial public license. These are distinct contracts or authorizations, not additions that rewrite the standardized CC license. [Creative Commons FAQ](https://creativecommons.org/faq/).

The CC BY-NC-SA deed states that credit, indication of modifications and ShareAlike are required, while noncommercial sharing and adaptation are allowed. [License deed](https://creativecommons.org/licenses/by-nc-sa/4.0/).

### Rights holders and collective works

In France, **Code de la propriété intellectuelle, article L113-3** provides a framework for *œuvres de collaboration*, including exercise of joint rights by agreement of the coauthors; other categories, such as *œuvres collectives* and *œuvres composites*, require separate analysis. The nature of a GitHub project does not, by itself, resolve its legal classification. [CPI L113-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278883/).

A transfer of authors' exploitation rights in French law is subject to formal specification under **CPI L131-3**, including the distinct rights transferred and limits of purpose, territory and duration. Non-exclusive authorization needs appropriate drafting under the law applicable to the arrangement; generic wording here is not an executed agreement. [CPI L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958/).

Creative Commons advises licensors to verify ownership or authority before licensing and to label excluded third-party content. It does not recommend Creative Commons licenses for software. [Creative Commons FAQ](https://creativecommons.org/faq/).

### Further research / unresolved implementation

1. Which specific files, versions, and identified authors can lawfully be included in the first CC notice?
2. How should prior discussions and contributions be attributed, without assuming that every idea or machine-assisted text is independently copyrightable?
3. What written contributor permissions are proportionate for noncommercial publication, and what separate commercial licensing mandate would be appropriate later?
4. What rules for collective income, permitted commercial partners, appeal, and author withdrawal are consistent with non-domination?
5. How should translations identify the English approved text they reproduce while respecting their translators' possible rights?
6. Which borderline uses require a practical permission request channel?

## References

**Primary documents reviewed for this proposal:**

1. [Creative Commons — Attribution–NonCommercial–ShareAlike 4.0 International, legal code](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode). Governing license text; especially sections 1–3 and 6.
2. [Creative Commons — CC BY-NC-SA 4.0 deed](https://creativecommons.org/licenses/by-nc-sa/4.0/). Human-readable summary, not a substitute for the legal code.
3. [Creative Commons — FAQ](https://creativecommons.org/faq/). Separate licenses/permissions, licensor authority, exceptions and software advice.
4. [France — Code de la propriété intellectuelle, article L113-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278883/). Joint authorship and exercise of rights for *œuvres de collaboration*.
5. [France — Code de la propriété intellectuelle, article L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958/). Formal requirements applicable to transfers of exploitation rights.

**Limitations:** this is a working editorial and legal analysis, not individualized legal advice. No project-specific contributor agreement has been legally reviewed or executed.

## Revision history

- **2026-11-16 — v0.1, `in_progress`:** Initial bilingual draft documenting the initiator's desired prohibition of unauthorized outside commercial exploitation, proposed CC BY-NC-SA 4.0, rights exclusions and outstanding collective-permissions governance. No approval or license implementation recorded.
