module.exports = {
    ra: {
        action: {
            add_filter: 'Legg til filter',
            add: 'Legg til',
            back: 'Tilbake',
            bulk_actions: '%{smart_count} valgt',
            cancel: 'Avbryt',
            clear_input_value: 'Fjern verdi',
            clone: 'Klon',
            create: 'Opprett',
            delete: 'Slett',
            edit: 'Rediger',
            export: 'Eksporter',
            list: 'Liste',
            refresh: 'Oppdater',
            remove_filter: 'Fjern filter',
            remove: 'Fjern',
            save: 'Lagre',
            search: 'Søk',
            show: 'Vis',
            sort: 'Sorter',
            undo: 'Angre',
        },
        boolean: {
            true: 'Ja',
            false: 'Nei',
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
        },
        message: {
            about: 'Om',
            are_you_sure: 'Er du sikker',
            bulk_delete_content:
                'Er du sikker på at du vil slette %{name}? |||| r du sikker på at du vil slette %{smart_count} poster?',
            bulk_delete_title:
                'Slett %{name} |||| Slett %{smart_count} %{name} elementer',
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
            yes: 'Ja',
        },
        navigation: {
            no_results: 'Ingen resultater funnet',
            no_more_results:
                'Sidenummer %{page} finnes ikke. Prøv forrige side.',
            page_out_of_boundaries: 'Sidenummer %{page} finnes ikke',
            page_out_from_end: 'Det finnes ikke flere sider',
            page_out_from_begin: 'Kan ikke vise sider før 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} av %{total}',
            page_rows_per_page: 'Rader per side:',
            next: 'Neste',
            prev: 'Forrige',
        },
        auth: {
            user_menu: 'Profil',
            username: 'Brukernavn',
            password: 'Passord',
            sign_in: 'Logg inn',
            sign_in_error: 'Pålogging feilet, prøv på nytt',
            logout: 'Logg ut',
        },
        notification: {
            updated: 'Element oppdagert |||| %{smart_count} elementer oppdatert',
            created: 'Element opprettet',
            deleted: 'Element slettet |||| %{smart_count} elementer slettet',
            bad_item: 'Feil element',
            item_doesnt_exist: 'Elementet eksisterer ikke',
            http_error: 'Server kommunikasjonsfeil',
            data_provider_error:
                'dataProvider feil. Se i konsollet for detaljer.',
            canceled: 'Handling avbrutt',
        },
        validation: {
            required: 'Påkrevd',
            minLength: 'Må være minst %{min} tegn',
            maxLength: 'Må være %{max} tegn eller færre',
            minValue: 'Må være minst %{min}',
            maxValue: 'Må være %{max} eller færre',
            number: 'Må være ett tall',
            email: 'Må være en gyldig e-psotadresse',
            oneOf: 'Må være en av: %{options}',
            regex: 'Må være på bestemt format (regexp): %{pattern}',
        },
    },
};