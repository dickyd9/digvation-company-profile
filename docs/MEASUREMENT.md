# Digvation Measurement Plan

Analytics configuration is centralized and consent-aware. GA4 may run directly, GTM receives the same semantic events for future marketing tags, and Clarity remains optional. Do not install GA4 again through GTM while the direct integration is enabled.

## Environment

```env
PUBLIC_ANALYTICS_MODE=consent
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_GTM_ID=GTM-XXXXXXX
PUBLIC_CLARITY_ID=xxxxxxxxxx
PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxx
```

## Event taxonomy

| Event                                 | Meaning                                                   |
| ------------------------------------- | --------------------------------------------------------- |
| `page_view`                           | One deduplicated page view, including Astro route changes |
| `project_view`                        | A visitor chooses a project from a listing or homepage    |
| `case_study_view`                     | A case-study page is loaded                               |
| `service_view`                        | An inline solution detail is opened                       |
| `cta_click`                           | A primary or supporting CTA is selected                   |
| `contact_start`                       | The visitor first interacts with the inquiry form         |
| `contact_submit`                      | A valid form submission attempt starts                    |
| `contact_success`                     | The server confirms successful inquiry delivery           |
| `whatsapp_click`                      | A configured WhatsApp action is selected                  |
| `email_click`                         | A direct email action is selected                         |
| `pricing_view`                        | The enabled pricing section enters view                   |
| `pricing_cta_click`                   | A pricing CTA is selected                                 |
| `language_change`                     | The language switch is selected                           |
| `outbound_project_click`              | A live client project is opened                           |
| `section_view`                        | A tracked page section enters view                        |
| `scroll_depth_50` / `scroll_depth_90` | Long-page consumption milestones                          |
| `outbound_click`                      | Another external destination is opened                    |

Use `contact_success` as the primary website lead conversion. Do not use the submit-button click as a conversion.

## Attribution

The browser retains these values for the session and the inquiry payload includes them automatically:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- Google or Meta click ID
- landing page
- referrer

## Primary funnel

```text
Relevant visit -> project or solution interest -> contact start -> contact submit -> contact success
```

Review conversion quality alongside rate. More button clicks are not useful if inquiries become less relevant.
