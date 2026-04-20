# Публикация на GitHub

Репозиторий уже с инициализированным Git и первым коммитом. Описание для GitHub: **«Дизайн-система тем»**. Имя репозитория: **DesignSystemsTheme**.

## Вариант A: GitHub CLI

```bash
cd /path/to/DesignSystemsTheme
gh auth login
gh repo create DesignSystemsTheme --public --description "Дизайн-система тем" --source=. --remote=origin --push
```

## Вариант B: вручную

1. На GitHub: **New repository** → имя `DesignSystemsTheme`, описание `Дизайн-система тем`, без README (он уже в репо).
2. Локально:

```bash
cd /path/to/DesignSystemsTheme
git remote add origin https://github.com/YOUR_USER/DesignSystemsTheme.git
git push -u origin main
```

После пуша в монорепе с темами путь `../DesignSystemsTheme` должен указывать на клон этого репозитория (рядом с `rose-theme`, `Vanilla` и т.д.), либо используйте подмодуль / `file:` зависимость по договорённости в команде.
