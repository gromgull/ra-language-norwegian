module.exports = {
    ra: {
        action: {
            add_filter: 'Legg til filter',
            add: 'Legg til',
            back: 'Tilbake',
            bulk_actions: '%{smart_count} valgt',
            cancel: 'Avbryt',
            clear_array_input: 'Tøm listen',
            clear_input_value: 'Fjern verdi',
            clone: 'Klon',
            confirm: 'Bekreft',
            create: 'Opprett',
            create_item: 'Opprett %{item}',
            delete: 'Slett',
            edit: 'Rediger',
            export: 'Eksporter',
            list: 'Liste',
            refresh: 'Oppdater',
            remove_filter: 'Fjern filter',
            remove_all_filters: 'Fjern alle filtre',
            remove: 'Fjern',
            save: 'Lagre',
            search: 'Søk',
            select_all: 'Velg alle',
            select_all_button: 'Velg alle',
            select_row: 'Velg denne raden',
            show: 'Vis',
            sort: 'Sorter',
            undo: 'Angre',
            unselect: 'Fravelg',
            expand: 'Utvid',
            close: 'Lukk',
            open_menu: 'Åpne meny',
            close_menu: 'Lukk meny',
            update: 'Oppdater',
            move_up: 'Flytt opp',
            move_down: 'Flytt ned',
            open: 'Åpne',
            toggle_theme: 'Bytt lyst/mørkt tema',
            select_columns: 'Kolonner',
            update_application: 'Last inn applikasjonen på nytt',
        },
        boolean: {
            true: 'Ja',
            false: 'Nei',
            null: ' ',
        },
        page: {
            create: 'Opprett %{name}',
            dashboard: 'Dashboard',
            edit: '%{name} #%{id}',
            error: 'Noe gikk galt',
            list: '%{name}liste',
            loading: 'Laster inn',
            not_found: 'Ikke funnet',
            show: '%{name} #%{id}',
            empty: 'Ingen %{name} ennå.',
            invite: 'Vil du legge til en?',
            access_denied: 'Tilgang nektet',
            authentication_error: 'Autentiseringsfeil',
        },
        input: {
            file: {
                upload_several:
                    'Dra og slipp filer som skal lastes opp, eller trykk for å velge.',
                upload_single: 'Dra og slipp en fil som skal lastes opp, eller trykk for å velge.',
            },
            image: {
                upload_several:
                    'Dra og slipp bilder som skal lastes opp, eller trykk for å velge.',
                upload_single:
                    'Dra og slipp et bilde som skal lastes opp, eller trykk for å velge.',
            },
            references: {
                all_missing: 'Kan ikke finne referansedata.',
                many_missing:
                    'Minst en av de tilknyttede referansene finnes ikke lenger',
                single_missing:
                    'Tilknyttet referanse finnes ikke lenger',
            },
            password: {
                toggle_visible: 'Skjul passord',
                toggle_hidden: 'Vis passord',
            },
        },
        message: {
            about: 'Om',
            access_denied:
                'Du har ikke de nødvendige tillatelsene for å få tilgang til denne siden',
            are_you_sure: 'Er du sikker',
            authentication_error:
                'Autentiseringsserveren returnerte en feil, og påloggingsinformasjonen din kunne ikke bekreftes.',
            auth_error:
                'En feil oppstod under validering av autentiseringstokenet.',
            bulk_delete_content:
                'Er du sikker på at du vil slette %{name}? |||| Er du sikker på at du vil slette %{smart_count} poster?',
            bulk_delete_title:
                'Slett %{name} |||| Slett %{smart_count} %{name} elementer',
            bulk_update_content:
                'Er du sikker på at du vil oppdatere %{name} %{recordRepresentation}? |||| Er du sikker på at du vil oppdatere disse %{smart_count} elementene?',
            bulk_update_title:
                'Oppdater %{name} %{recordRepresentation} |||| Oppdater %{smart_count} %{name}',
            clear_array_input: 'Er du sikker på at du vil tømme hele listen?',
            delete_content: 'Er du sikker på at du vil slette denne posten?',
            delete_title: 'Slett %{name} #%{id}',
            details: 'Detaljer',
            error:
                "En feil oppstod og handlingen ble ikke utført.",
            invalid_form: 'Skjemaet er ikke gyldig. Sjekk for feil',
            loading: 'Siden lastes, vent litt',
            no: 'Nei',
            not_found:
                'Du har skrevet feil URL eller fulgt en ugyldig lenke',
            select_all_limit_reached:
                'Det er for mange elementer til å velge alle. Bare de første %{max} elementene ble valgt.',
            unsaved_changes:
                "Noen av endringene dine ble ikke lagret. Er du sikker på at du vil ignorere dem?",
            yes: 'Ja',
            placeholder_data_warning: 'Nettverksproblem: Dataoppdatering mislyktes.',
        },
        navigation: {
            clear_filters: 'Fjern filtre',
            no_filtered_results: 'Ingen %{name} funnet med gjeldende filtre.',
            no_results: 'Ingen resultater funnet',
            no_more_results:
                'Sidenummer %{page} finnes ikke. Prøv forrige side.',
            page_out_of_boundaries: 'Sidenummer %{page} finnes ikke',
            page_out_from_end: 'Det finnes ikke flere sider',
            page_out_from_begin: 'Kan ikke vise sider før 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} av %{total}',
            partial_page_range_info:
                '%{offsetBegin}-%{offsetEnd} av mer enn %{offsetEnd}',
            current_page: 'Side %{page}',
            page: 'Gå til side %{page}',
            first: 'Gå til første side',
            last: 'Gå til siste side',
            next: 'Neste',
            previous: 'Gå til forrige side',
            page_rows_per_page: 'Rader per side:',
            skip_nav: 'Hopp til innhold',
        },
        sort: {
            sort_by: 'Sorter etter %{field_lower_first} %{order}',
            ASC: 'stigende',
            DESC: 'synkende',
        },
        auth: {
            auth_check_error: 'Vennligst logg inn for å fortsette',
            user_menu: 'Profil',
            username: 'Brukernavn',
            password: 'Passord',
            email: 'E-post',
            sign_in: 'Logg inn',
            sign_in_error: 'Pålogging feilet, prøv på nytt',
            logout: 'Logg ut',
        },
        notification: {
            updated: 'Element oppdatert |||| %{smart_count} elementer oppdatert',
            created: 'Element opprettet',
            deleted: 'Element slettet |||| %{smart_count} elementer slettet',
            bad_item: 'Feil element',
            item_doesnt_exist: 'Elementet eksisterer ikke',
            http_error: 'Server kommunikasjonsfeil',
            data_provider_error:
                'dataProvider feil. Se i konsollet for detaljer.',
            i18n_error:
                'Kan ikke laste oversettelsene for det angitte språket',
            canceled: 'Handling avbrutt',
            logged_out: 'Økten din er avsluttet, vennligst koble til på nytt.',
            not_authorized: "Du er ikke autorisert til å få tilgang til denne ressursen.",
            application_update_available: 'En ny versjon er tilgjengelig.',
        },
        validation: {
            required: 'Påkrevd',
            minLength: 'Må være minst %{min} tegn',
            maxLength: 'Må være %{max} tegn eller færre',
            minValue: 'Må være minst %{min}',
            maxValue: 'Må være %{max} eller færre',
            number: 'Må være ett tall',
            email: 'Må være en gyldig e-postadresse',
            oneOf: 'Må være en av: %{options}',
            regex: 'Må være på bestemt format (regexp): %{pattern}',
            unique: 'Må være unik',
        },
        saved_queries: {
            label: 'Lagrede søk',
            query_name: 'Navn på søk',
            new_label: 'Lagre gjeldende søk...',
            new_dialog_title: 'Lagre gjeldende søk som',
            remove_label: 'Fjern lagret søk',
            remove_label_with_name: 'Fjern søk "%{name}"',
            remove_dialog_title: 'Fjerne lagret søk?',
            remove_message:
                'Er du sikker på at du vil fjerne dette elementet fra listen over lagrede søk?',
            help: 'Filtrer listen og lagre dette søket for senere',
        },
        configurable: {
            customize: 'Tilpass',
            configureMode: 'Konfigurer denne siden',
            inspector: {
                title: 'Inspektør',
                content: 'Hold musepekeren over UI-elementene for å konfigurere dem',
                reset: 'Tilbakestill innstillinger',
                hideAll: 'Skjul alle',
                showAll: 'Vis alle',
            },
            Datagrid: {
                title: 'Datanett',
                unlabeled: 'Umerket kolonne #%{column}',
            },
            SimpleForm: {
                title: 'Skjema',
                unlabeled: 'Umerket inndata #%{input}',
            },
            SimpleList: {
                title: 'Liste',
                primaryText: 'Primærtekst',
                secondaryText: 'Sekundærtekst',
                tertiaryText: 'Tertiærtekst',
            },
        },
    },
};