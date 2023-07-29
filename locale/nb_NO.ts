export default {
	locale: "Norsk bokmål (Norge)",
	// Common / Repeated words and phrases
	common: {
		appName: "7TV",
		appHost: "7tv.app",
		supportEmail: "kathy{'@'}7tv.app",
		learnMore: "Finn ut mer",
		more: "Mer",
		retry: "Prøv igjen",
		back: "Tilbake",
		download: "Last ned| Lastet ned",
		features: "Funksjoner",
		experimental: "Eksperimentell",
		experimental_hint: "Denne funksjonen er eksperimentell og er ikke garantert å være stabil",
		comments: "Kommentarer",
		search: "Søk",
		update: "Oppdater",
		report: "Rapporter",
		delete: "Slett",
		cancel: "Avbryt",
		submit: "Send inn",
		activity: "Aktivitet",
		loading: "Laster",
		save_changes: "Lagre Endringer",
		reset: "Tilbakestill",
		object: {
			user: "Bruker",
			emote_set: "Emote-sett",
			emote: "Emote",
		},
	},
	// Text that appears on the home page
	home: {
		slogan: "Emote-plattformen for alle",
		app_description: "Hold enkelt styr på hundrevis av emoter for Twitch eller YouTube-kanalen din",
		why_app: "Hvorfor @:common.appName{'?'}",
		download_browser: "Nettleserutvidelse",
		download_mobile: "Mobilapper",
		download_misc: "Andre Apper",
		features: {
			emote_sets: {
				name: "Emote-sett",
				detail: "Grupper emoter i egendefinerte sett som kan deles med andre eller raskt byttet mellom for kanalen din.",
			},
			many_emote_slots: {
				name: "Hundrevis av emote-plasser",
				detail: "Alle får 600 tilpassede kanalemote plasser, helt gratis.",
			},
			channel_emote_names: {
				name: "Kanaltilpasset emote-navn",
				detail: "Liker du ikke navnet på emoten? Endre det for bruk i din kanal.",
			},
			real_time: {
				name: "Sanntid",
				detail: "Endring av emoter oppdateres umiddelbart for alle seerne dine. Uten behov for F5.",
			},
			emote_versions: {
				name: "Emote-versjoner",
				detail: "Bytt mellom tematiserte varianter eller oppdater til en forbedret versjon av emoten.",
			},
			userbase: {
				name: "Stort Fellesskap",
				detail: "@:common.appName behandler {0}+ daglig unike brukere, og har et bibliotek på over {1} offentlige emotes",
			},
			next_gen: {
				name: "Neste generasjons bildeformater som WEBP og AVIF",
				detail: "Vi bruker nyere, mer optimaliserte bildeformater for å redusere båndbreddebruken.",
			},
			source_available: {
				name: "Tilgjengelig kildekode",
				detail: "Hele vår kodebase er tilgjengelig på GitHub med en åpen kildekode-lisens. Hvem som helst kan se og bidra.",
			},
		},
		socials: {
			discord: "Bli med @:common.appName på Discord",
			discord_online_count: "{0} pålogget nå",
			twitter: "Følg oss på Twitter",
			github: "Bidra",
		},
		legal: {
			terms: "Brukervilkår",
			privacy: "Personvernerklæring",
			unaffiliated: "@:common.appName er ikke tilknyttet til Twitch Interactive",
		},
	},
	// Nav Bar
	nav: {
		home: "Hjem",
		about: "Om",
		emotes: "Emoter",
		store: "Abonner",
		admin: "Administrator",
		sign_in: "Logg Inn",
		user_search: "Søk etter brukere",
		theme: "Bytt til {0} tema",
		theme_dark: "Mørk",
		theme_light: "Lys",
		theme_seasonal: "Sesong",
		inbox: "Innboks",
		locale_selector: "Språk",
		locale_contribute: "Oversett @:common.appName{'!'}",
		wip_notice: {
			heading: "Velkommen til den nye @:common.appName nettsiden",
			text1: "Dette er en tidlig forhåndsvisning av den neste måten å oppleve @:common.appName{'.'}",
			text2: "Utforsk hva som er nytt og gi gjerne tilbakemelding! Merk at endringer vil foregå ofte og at nettsiden ikke alltid vil funke som den skal.",
		},
	},
	activity: {
		emote_created: "Opprettet {T}",
		emote_renamed: "Endret navnet på {T} fra {O} til {N}",
		emote_listing_approved: "Godkjent {T} for offentlig visning",
		emote_listing_revoked: "Fjernet {T} fra offentlig visning",
		emote_merged: "Slått sammen {T} til {0}",
		emote_ownership_transferred: "Overførte eierskap av {T} til {U}",
		emote_restored: "Gjenopprettet {T}",
		emote_updated: "Endret egenskaper for {T}",
		emote_deleted: "Slettet {T}",
		emote_tags_updated: "Sett tagger for {T}: {N}",
		emote_processed: "Utførte en ny behandlingsjobb av {T}",
		emote_version_created: "Opprettet versjon '{VER}' av {T}",
		emote_version_renamed: "Endret navn på versjon '{VER}' av {T} fra {1} til {2}",
		emote_version_approved: "Godkjente versjon '{VER}' av {T} for offentlig oppføring",
		emote_version_restored: "Gjenopprettet versjon '{VER}' av {T}",
		emote_version_deleted: "Slettet versjon '{VER}' av {T}",
		emote_flag_added: "La til markering {FLAG} til {T}",
		emote_flag_removed: "Fjernet markering {FLAG} fra {T}",
		emote_personal_use_validated: "Godkjent personling bruk for {T}",
		emote_personal_use_rejected: "Avvist personling bruk for {T}",
		user_created: "Opprettet {T}",
		user_deleted: "Slettet {T}",
		user_editor_added: "La til {U} som redaktør",
		user_editor_added_other: "La til {U1} som redaktør av {U2}",
		user_editor_updated: "Oppdaterte redaktørrettigheter for {U}",
		user_editor_updated_other: "Oppdaterte redaktørrettigheter for {U1}, en redaktør av {U2}",
		user_editor_removed: "Opphevet redaktørrettighetene til {U}",
		user_editor_removed_other: "Opphevet {U1}'s redigeringsrettigheter til {U2}",
		user_banned: "Utestengte {T}",
		user_unbanned: "Fjernet utestengelsen fra {T}",
		user_updated: "Endret egenskaper for {T}",
		user_sign_in: "{T} har logget inn",
		user_sign_out: "{T} har logget ut",
		user_forbidden: "{T} ble nektet tilgang til {0}",
		emote_set_created: "Opprettet {T}",
		emote_set_emote_added: "La til emoten {AE} til {T}",
		emote_set_emote_removed: "Fjernet emoten {AE} fra {T}",
		emote_set_emote_renamed: "Endret navnet på {AE} fra {O} til {N} i {T}",
		emote_set_capacity_updated: "Oppdaterte kapasiteten av {T} fra {O} til {N}",
		emote_set_renamed: "Endret navn på settet {T} fra {O} til {N}",
		emote_set_updated: "Endret egenskaper for {T}",
	},
	// Text that is relevant to emotes
	emote: {
		add: "Legg til emote",
		author: "Lagt til av",
		created_at: "Opprettet",
		versions: "Versjoner",
		preview_loading: "Laster forhåndsvisning... {'('}{0}{'/'}{1}{')'}",
		preview_failed: "Kunne ikke laste forhåndsvisning",
		processing: "Behandler emoten - dette kan ta litt tid.",
		processing_failed: "Behandlingen mislyktes: {0}",
		use: "Bruk emote",
		use_menu: "Legg denne emoten til...",
		switch_version: "Bytt til denne versjonen",
		in_n_sets: "i {0} sett | i {0} sett",
		disable: "Deaktiver emote",
		properties: "Egenskaper",
		new_version: "Ny Versjon",
		report: "Rapporter emote",
		Privacy: "Personvern",
		comments: "Kommentarer",
		channels: "Kanaler",
		common_names: "Andre navn for denne emoten",
		usage_stats: "Emote-statistikk",
		no_longer_available: "Denne emoten er ikke lenger tilgjengelig",
		tags: "Tagger",
		add_tag: "Legg til tagg",
		trending_rank: "#{0} i mest Populære",
		card_label_added: "Lagt til {0}",
		card_label_added_foreign: "Lagt til {0}, opprinnelig fra et annet sett",
		avif_no_support:
			"Beklager, {BROWSER} støtter ikke AVIF-formatet. Prøv å oppdatere til en nyere versjon eller prøv en annen nettleser.",
		delete_prompt: {
			heading: "Slett {0}",
			heading_versions: "Slett versjon '{0}' av {1}",
			notice: "Er du sikker på at du ønsker å slette emoten {0}{'?'}",
			notice_versions: "Er du sikker på at du ønsker å slette versjon '{0}' fra {1}{'?'}",
			reason: "Grunn for fjerning",
		},
		properties_prompt: {
			heading: "Rediger {0}",
		},
		unlisted: {
			heading: "Pass på!",
			warning: "Denne emoten er ikke vist offentlig.",
			warning_flagged: "Denne emoten har blitt fjernet fra offentlig bruk av følgende grunner: {FLAG_LIST}",
			notice: "Det kan legges til i din kanal, men vi kan ikke verifisere at det er trygt å vise på en direktestrøm.",
			notice_flagged: "Det kan legges til i din kanal, men vi tror at den er utrygg å vise på en direktestrøm.",
			show_button: "Vis emote",
			flag_sexual_content: "Seksuelt eller seksuelt antydende innhold",
			flag_epilepsy: "Raske blinkende lys / anfallsfremkallende",
			flag_edgy: "På kanten eller usmakelig",
			flag_twitch_banned: "Ikke tillatt på Twitch",
		},
		list: {
			searching: "Søker",
			emote_count: "{0} emote {0} emoter",
			no_emotes_listed: "Ingen emoter funnet",
			fetching_slowly: "Beklager, dette ser ut til å ta en stund",
			category: {
				name: "Kategori",
				top: "Topp",
				trending: "Populære",
				featured: "Utvalgte",
				global: "Globale",
				new: "Nyeste",
			},
			filters: {
				hint: "Søkefiltre",
				zero_width: "Overlegging / nullbredde",
				animated: "Animert",
				case_sensitive: "Skill mellom store og små bokstaver",
				exact_match: "Nøyaktig treff",
				ignore_tags: "Ignorer tagger",
				personal_use_approved: "Godkjent for personlig bruk",
				sorting: "Sortering",
				sorting_ascending: "Stigende",
				sorting_descending: "Synkende",
				aspect_ratio: "Visningsforhold",
				aspect_ratio_format: "Bredde til høyde",
				aspect_ratio_width: "Breddeforhold",
				aspect_ratio_height: "Høydeforhold",
				aspect_ratio_tolerance: "Forhold toleranse %",
			},
		},
		context: {
			use_emote_ellipsis: "Bruk Emoten...",
			open_in_new_tab: "Åpne i ny fane",
			copy_emote_link: "Kopier Emote Link",
		},
		upload: {
			emote_name: "Emote-navn",
			version_name: "Versjonsnavn",
			version_description: "Versjon-beskrivelse",
			submit_emote: "Send inn emote",
			create_emote_version: "Opprett emote-versjon",
			image_upload: "Bildeopplasting",
			accepted_formats: "Aksepterte formater",
			filetype: "Fil",
			animation: "Animasjon",
			transparency: "Gjennomsiktighet",
			emote_details: "Emote-detaljer",
			version_details: "Versjonsdetaljer",
			attribution: "Kreditering",
			original_creator: "Opprinnelig skaper",
			as_child: "Du oppretter en {IS_DIVERGED} versjon av {0}. ",
			content_moderation: "Innholdsmoderasjon",
			half_transparency_tooltip:
				"Piksler kan kun være helt gjennomsiktige eller helt ugjennomsiktig (ingen delvis gjennomsiktighet)",
		},
	},
	emote_set: {
		create: "Nytt @:common.object.emote_set",
		select: "Velg emote-sett",
		explain: {
			section: "Hva er emote-sett?",
			hint: "Emote-sett er en samling av emoter som kan kobles til dine kanaler eller deles med andre brukere.",
			hint_select: "Hvilken emote-sett vil du bruke som standard?",
			hint_select_emote: "Hvor skal {EMOTE} legges til?",
		},
		no_space: "Settet er fullt",
		none_selected: "Ingen sett valgt",
		editing: "Redigerer {0}",
		owner: "{USER}'s emote-sett",
		owned: "Eide emote-sett",
		managed_by: "Administrert av {USER}",
		label_renamed: "Omdøpt",
		label_conflict: "Konflikt",
		label_default: "Standard",
		label_actor: "Aktivert av {0}",
		// "enabled by <display_name of actor>"
		label_synced: "Opprinnelig fra et annet sett",
		context_emote_add: "Legg til i {SET_NAME}",
		context_emote_remove: "Fjern fra {SET_NAME}",
		origins: {
			title: "Opprinnelse",
			hint: "Synkroniser andre emote-sett for å gi grunnleggende emotes for {0}, nyttig for å administrere høytidsvarianter.",
			new: "Legg til opprinnelse",
			remove: "Fjern opprinnelse",
			priority: "Prioritet",
			priority_hint:
				"Verdien bestemmer hvilken opprinnelse som tar prioritet når man skal håndtere navnekonflikter",
		},
		personal: {
			personal_use_guidelines: "Retningslinjer for personlig bruk",
			emote_not_validated:
				"{EMOTE} må sjekkes av en moderator for samsvar med @:emote_set.personal.personal_use_guidelines{'.'}",
			pending_review: "Avventer vurdering for personlig bruk",
			not_allowed: "Ikke tillatt for personlig bruk",
			allowed: "Godkjent for personlig bruk",
		},
		modal: {
			selected_channel_count: "ingen kanal valgt | {0} kanal valgt | {0} kanaler valgt",
			create_button: "Opprett @:common.object.emote_set",
			rename_in_set: "Endre navn i {0}",
			context_rename: "Tilpass emote-navn",
			context_set_default: "Angi som standard",
			context_unset_default: "Fjern som standard",
			conflict_heading: "Konflikt i emote-navn",
			conflict_notice: "{EMOTE} er i konflikt med {ACTIVE_EMOTE}. Ønsker du å erstatte den motstridende emoten?",
			conflict_button_replace: "Erstatt konflikt",
		},
		properties_prompt: {
			heading: "Endre {0}",
			name: "Emote-sett Navn",
			capacity: "Kapasitet: {0}",
			assign_to_channel: "Tilknytt til kanal(er)",
		},
		delete_prompt: {
			heading: "Slett {0}",
			notice: "Er du sikker på at du vil slette emote-settet {0}{'?'} Denne handlingen kan ikke angres.",
		},
	},
	// Text that is relevant to users
	user: {
		emote_sets: "Emote-sett",
		no_sets: "{0} har ingen emote-sett.",
		channel_emotes: "Kanal-emoter",
		joined_at: "Ble medlem {0}",
		editors: "Redaktører",
		roles: "Roller",
		connections: "Kanaler | Kanaler & Kontoer",
		new_connections: "Tilknytt kontoer...",
		edit_connection: "Rediger tilkobling",
		add_editor: "Legg til redaktør",
		open_external_profile: "Åpne profil (ekstern)",
		editor_modal_heading: "Endre {0} sine redaktører",
		editor_modal_user_search: "Hvem vil du legge til som en redaktør?",
		editor_modal_user_update: "Redaktør",
		no_channel_emotes: "{0} har ingen emoter på deres {1} kanal",
		no_channels: "{0} har ingen kanaler tilkoblet!",
		card: {
			view_full_profile: "Vis full profil",
		},
		settings: {
			button: "Rediger profil",
			section_profile: "Profil",
			username: "Brukernavn",
			display_name: "Visningsnavn",
			profile_picture: "Profilbilde",
			section_badges: "Merker",
			section_paints: "Malinger",
			no_badges: "Du eier ingen merker",
			no_paints: "Du eier ingen malinger",
			sign_out: "Logg ut",
			cosmetics_updated: "Kosmetikk oppdatert",
			cosmetics_updated_message:
				"Dine endringer vil oppdateres umiddelbart i chatten hvis du bruker den offisielle 7TV utvidelsen.",
			cosmetics_updated_third_party:
				"Hvis du bruker en tredjepart-klient, slik som et tillegg i en annen utvidelse, kan det ta opptil 24 timer.",
		},
		editor_permissions: {
			modify_emotes: "Endre kanal-emoter",
			use_private_emotes: "Bruk private emoter",
			manage_profile: "Behandle profil",
			manage_owned_emotes: "Behandle eide emoter",
			manage_emote_sets: "Behandle Emote-Sett",
			manage_billing: "Administrere fakturering",
			manage_editors: "Behandle redaktører",
			view_messages: "Vis meldinger",
		},
	},
	store: {
		subscribe_cta: "Bli @:common.appName abonnent!",
		subscribed: "Takk for at du abonnerer",
		button_self: "Abonner",
		button_gift: "Gi et gaveabonnement",
		billing_information_heading: "Fakturainformasjon",
		payment_information_heading: "Betalingsinformasjon",
		payment_gift_heading: "Velg mottaker av denne gaven",
		payment_methods: "Betalingsmetoder",
		payment_methods_hint: "Velg betalingsmetode",
		payment_method_paypal: "PayPal",
		payment_method_stripe: "Bankkort",
		payment_popup_cta: "Fullfør betalingen i det nye vinduet",
		checkout_button: "Fullfør",
		product_type_subscription: "Abonnement",
		redeem_heading: "Løse inn gavekode",
		redeem_hint: "Har du en spesiell gavekode eller kupong? Skriv den her for å løse den inn!",
		redeem_submit: "Løse inn",
		purchase_success: {
			heading: "Kjøp vellykket",
			text1: "Vi har mottatt betalingen din og abonnementet ditt er aktivert.",
			text2: "Takk for din støtte! Hvis du har spørsmål, kan du kontakte oss via metodene på denne siden.",
		},
		sub: {
			incentive: "Du får...",
			creator_tier: "Ekstra for skapere",
			creator_tier_desc: "Oppgrader til Skaper nivået og gi kanalen din litt ekstra stil",
			feature_t1_badge: "Abonnent merke",
			feature_t1_paints: "Visningsnavn Maling",
			feature_t1_animated_profile_picture: "Animert profilbilde",
			feature_t1_zero_width: "Null-Bredde Emoter",
			feature_t1_global_raffle: "Global Emote Loddtreknings Billet",
			feature_t1_personal_emotes: "Personlige Emoter",
			feature_t2_animated_profile_banner: "Animated Profile Banner",
			feature_t2_animated_offline_screen: "Animated Offline Screen",
			feature_t2_custom_chat_theme: "Egendefinert chat-tema",
			feature_t2_extended_sub_emotes: "Extended Sub Emotes",
			current_plan: "Din Plan",
			cancel: "Ikke forny",
			update_payment: "Oppdater Betalingsmetode",
			reactivate: "Reaktiver abonnementet",
			cancel_prompt: "Er du sikker på at du vil avslutte abonnementet?",
			state_heading: "Ditt Abonnement",
			state_badge_heading: "Abonnent-merker",
			state_badge_progress: "Merkefremgang",
			state_badge_progress_filled: "Du vil motta ditt {0} merke om kort tid",
			state_badge_edit_button: "Administrer Merker",
			state_paints: "Malinger",
			state_anniversary:
				"Ditt abonnentsjubileum er i dag | Ditt neste jubileum er om {0} dag | Ditt neste abonnentsjubileum er om {0} dager",
			state_age: "Du abonnerte i dag | Du har abonnert i {0} dag | Du har abonnert i {0} dager",
			state_gift: "Du ble gitt et abonnement av {USER}",
			state_ending:
				"Ditt abonnement går ut i dag | Ditt abonnement går ut om {0} dag | Ditt abonnement går ut om {0} dager",
			state_collection_heading: "Samling",
			state_paints_heading:
				"Du har ingen malinger ennå | Du har låst opp {0} maling så langt | Du har låst opp {0} malinger så langt",
			state_paints_current: "Malinger tilgjengelig nå",
			state_paints_hint: "Nye malinger kommer ut hver måned!",
			state_paints_edit_button: "Behandle Malinger",
			state_raffle: "Global Emote loddtrekning",
			state_leaderboards: "Topp gaveutdelere",
			raffle: {
				starts_at: "{0} dager",
				starts_at_hint: "Den neste Abonnement loddtrekningen starter den {0}",
			},
		},
	},
	// Text that is relating to the reporting system
	reporting: {
		report: "Rapporter",
		emote_reason: {
			i_made_this: "Jeg lagde denne emoten, men den ble lastet opp av noen andre",
			duplicate: "Denne emoten er et duplikat",
			pornographic: "Denne emoten inneholder pornografisk eller overflødig seksualiserte bilder",
			violence_gore: "Denne emoten viser ekstrem vold eller gørr",
			i_appear_there: "Denne emoten skildrer meg og jeg liker det ikke",
			offensive: "Jeg synes denne emoten er støtende",
			other: "Noe annet",
		},
		uncategorized_prompt: "Hva gjelder det?",
		details: "Detaljer (tilleggsinformasjon og/eller bevis for rapporten)",
		success: "Rapport innsendt",
		notify: "Du vil bli varslet via innboksen din når rapporten er håndtert eller det er behov for ytterligere informasjon.",
		complete_step_one: "Fortsett",
		abuse_notice: "Misbruk av rapportfunksjonen kan føre til at du blir utestengt fra videre bruk.",
	},
	// Text that is relating to the provider migration tool
	migrate: {
		cta: "Overfør til @:common.appName",
		heading: "Migrer dine Emoter til @:common.appName",
		pitch: "Flytt emotene dine automatisk fra andre leverandører til @:common.appName og dra nytte av enkelheten i vår plattform!",
		select_providers: "Hvilke leverandører vil du importere fra?",
	},
	// Text that is relevant to the inbox
	inbox: {
		inbox: "Innboks",
		tabs: {
			all: "Alle meldinger",
			unread: "Ikke lest",
			important: "Viktig",
		},
		unread_tag: "Ikke lest",
		// System inbox messages
		generic: {
			emote_listed: {
				subject: "Emote godkjent for oppføring",
				content: `
# Din emote "{EMOTE_NAME}" ble godkjent for oppføring \n
Den vil nå være tilgjengelig i emote-katalogen og vil vises på @:common.appHost{'.'}
`,
			},
			emote_not_listed: {
				subject: "Emote ikke godkjent for oppføring",
				content: `
# Din emote "{EMOTE_NAME}" ble avvist
Den vil ikke være tilgjengelig via den offentlige emote-katalogen eller synlig på @:common.appHost,
men vil forbli tilgjengelig for brukere med lenken.
`,
			},
			emote_ownership_claim_request: {
				subject: "Invitasjon til å overta eierskap av en emote",
				content: `
## {OWNER_DISPLAY_NAME} ønsker at du skal overta eierskap av '{EMOTE_NAME}'

[Vis emote]({EMOTE_URL})

**[Godta forespørsel]({EMOTE_CLAIM_URL})** | [Avslå forespørsel]({EMOTE_DECLINE_URL})
				`,
			},
			client_banned: {
				subject: "Du har blitt utestengt",
				reason: {
					pornographic_content: "",
				},
				content: `
# Konto utestengt
Din tilgang til @:common.appName er nå begrenset.<br/><br/>
### Årsak til denne handlingen
{BAN_REASON} <br/><br/>
### Begrensninger tildelt<br/>
{EFFECT_NO_PERMISSIONS}
{EFFECT_NO_AUTH}
{EFFECT_NO_OWNERSHIP}
{EFFECT_MEMORY_HOLE}

<br/>Denne avgjørelsen utløper **{BAN_EXPIRE_AT}**.
_Hvis du tror dette er en feil, vennligst kontakt @:common.supportEmail{'.'}_
`,
				effect: {
					no_permissions: "* Du kan ikke lenger bruke appen",
					no_auth: "* Du kan ikke lenger logge inn",
					no_ownership: "* Alt innhold du har lagd vil ikke lenger være tilgjengelig",
					memory_hole: "* Du vil ikke være synlig for andre brukere",
					ip_blocked: "* Din IP er blokkert i fra å bruke alle @:common.appName tjenester",
				},
			},
			report_closed: {
				subject: "Rapport lukket",
				content: `
Takk for at du ga beskjed til oss, din rapport {'#'}{CASE_ID} har blitt håndtert.
				`,
			},
		},
	},
	// 404 Messages
	notFound: {
		troll_despair: "Vi kunne ikke finne den",
		doctor_wtf: "Hva faen er dette?",
		pot_friend: "Jeg er en potte, venn",
	},
};
