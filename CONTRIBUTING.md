# Contributing to ProjectPy

Thank you for your interest in contributing to **ProjectPy**!

ProjectPy is free, open-source Python documentation platform maintained by [Souhardya Das](https://github.com/Sdas2003810). Our mission is to make Python accessible to every learner on the planet.

---

## Quick Start

```bash
# 1. Clone and enter the repository
git clone https://github.com/projectpy70/projectpy.git
cd projectpy

# 2. Create and activate a virtual environment
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run the live dev server
mkdocs serve
```

Visit `http://127.0.0.1:8000` — changes to `.md` files auto-reload in the browser.

Verify your build passes before submitting a PR:

```bash
mkdocs build --strict
```

---

## Full Contribution Guide

For the complete guide including style guidelines, a PR checklist, how to write a new stdlib module guide, and more — see the **[in-site How to Contribute page](https://projectpy70.github.io/projectpy/community/contributing/)**.

---

## Ways to Help

- Fix typos and grammar
- Improve explanations with clearer analogies
- Add runnable code examples (Python 3.12+)
- Add Mermaid diagrams for visual learners
- Write a new guide for a [missing stdlib module](https://projectpy70.github.io/projectpy/coverage/)
- Report issues and suggest improvements on GitHub

---

## Code of Conduct

All contributors are expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md). Be kind, welcoming, and constructive.

---

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
