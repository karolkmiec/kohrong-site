# Disaster Recovery & Handover (Koh Rong Site)

Ten dokument pozwala wznowić pracę na nowej maszynie po awarii laptopa bez zgadywania "na czym skończyliśmy".

## 1) Co musi być zawsze zabezpieczone

1. Kod w GitHub (`main` aktualny po każdym istotnym kroku).
2. Kontekst pracy w `docs/session-checkpoint.md` (aktualizowany po zmianach).
3. Sekrety i konfiguracja poza repo:
   - Vercel Project Settings (env vars),
   - dostęp do kont GitHub/Vercel,
   - lokalny `.env` (jeśli używany).

## 2) Backup operacyjny (codzienny)

Po zakończeniu pracy:

1. `git status` -> upewnij się, że nic ważnego nie zostało tylko lokalnie.
2. `git add ... && git commit ... && git push` dla gotowych zmian.
3. Uzupełnij `docs/session-checkpoint.md`:
   - ostatni cel,
   - co zrobione,
   - co następne,
   - ewentualne blokery.
4. Sprawdź, że Vercel ma `Ready` dla ostatniego commita.

## 3) Odtworzenie na nowej maszynie

1. Zainstaluj: Git, Node.js LTS, Cursor.
2. Sklonuj repo:
   - `git clone https://github.com/karolkmiec/kohrong-site.git`
3. Wejdź do projektu i zainstaluj zależności:
   - `npm install`
4. Uruchom lokalnie:
   - `npm run dev`
5. Otwórz i przeczytaj:
   - `docs/session-checkpoint.md`
   - `README.md`
6. W Cursor wklej do agenta skrót:
   - "Pracujemy na `kohrong-site`, przeczytaj `docs/session-checkpoint.md` i kontynuuj od sekcji NEXT."

## 4) Jak zachować kontekst rozmowy agenta

- `Request ID` nie jest trwałym ID rozmowy.
- Trwałym odniesieniem jest UUID transkryptu czatu.
- Dla tej rozmowy odniesienie: `2424f3af-3f27-462e-8c60-6bf870bceff1` (Request ID) oraz transkrypt sesji wskazany w checkpointcie.

## 5) Minimalny standard "nigdy nic nie gubimy"

- Brak lokalnych, niezatwierdzonych zmian na koniec dnia.
- Każda zmiana wdrożeniowa kończy się push na GitHub.
- Każda sesja kończy się aktualizacją `docs/session-checkpoint.md`.

## 6) Auto-podsumowanie po każdej większej zmianie

Od tego momentu agent aktualizuje `docs/session-checkpoint.md` automatycznie po każdym istotnym kroku (np. nowy news, zmiana UI, poprawka deploy/CI).

Minimalny wpis aktualizacji obejmuje:

1. Co zostało zmienione (1-3 punkty).
2. Jakie pliki zostały dotknięte.
3. Co zostało zweryfikowane (np. build/deploy/URL).
4. Jaki jest kolejny krok (`NEXT`).

Przykładowy prompt na start sesji:
- "Kontynuuj pracę i po każdej większej zmianie zaktualizuj `docs/session-checkpoint.md`."
