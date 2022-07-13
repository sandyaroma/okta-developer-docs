export const concepts = [
  {
    title: "Concepts",
    path: "/docs/concepts/",
    subLinks: [
      {
        title: "API Access Management",
        path: "/docs/concepts/api-access-management/",
      },
      {
        title: "Authorization Servers",
        path: "/docs/concepts/auth-servers/",
      },
      {
        title: "Event Hooks",
        path: "/docs/concepts/event-hooks/",
      },
      {
        title: "Events API Migration",
        path: "/docs/concepts/events-api-migration/",
      },
      {
        title: "External Identity Providers",
        path: "/docs/concepts/identity-providers/",
      },
      {
        title: "Feature Lifecycle Management",
        path: "/docs/concepts/feature-lifecycle-management/",
      },
      {
        title: "Role Assignment",
        path: "/docs/concepts/role-assignment/",
      },
      {
        title: "How Okta works",
        path: "/docs/concepts/how-okta-works/",
      },
      {
        title: "Inline Hooks",
        path: "/docs/concepts/inline-hooks/",
      },
      {
        title: "Interaction Code grant type",
        path: "/docs/concepts/interaction-code/",
      },
      {
        title: "Key Rotation",
        path: "/docs/concepts/key-rotation/",
      },
      {
        title: "Monitor Okta",
        path: "/docs/concepts/monitor/",
      },
      {
        title: "Multi-tenant solutions",
        path: "/docs/concepts/multi-tenancy/",
      },
      {
        title: "OAuth 2.0 and OpenID Connect Overview",
        path: "/docs/concepts/oauth-openid/",
      },
      {
        title: "Okta deployment models — redirect vs. embedded",
        path: "/docs/concepts/redirect-vs-embedded/",
      },
      {
        title: "Okta Data Model",
        path: "/docs/concepts/okta-data-model/",
      },
      {
        title: "Okta Identity Engine Overview",
        path: "/docs/guides/oie-intro/",
      },
      {
        title: "Okta Organizations",
        path: "/docs/concepts/okta-organizations/",
      },
      {
        title: "Policies",
        path: "/docs/concepts/policies/",
      },
      {
        title: "Session management",
        path: "/docs/concepts/session/",
      },
      {
        title: "User Profiles",
        path: "/docs/concepts/user-profiles/",
      },
      {
        title: "Understanding SAML",
        path: "/docs/concepts/saml/",
        subLinks: [
          {
            title: "SAML FAQ",
            path: "/docs/concepts/saml/faqs/",
          },
        ],
      },
      {
        title: "Understanding SCIM",
        path: "/docs/concepts/scim/",
        subLinks: [
          {
            title: "SCIM FAQ",
            path: "/docs/concepts/scim/faqs/",
          },
        ],
      },
    ],
  },
];

export const guides = [
  {
    title: "Guides",
    path: "/docs/guides/",
    subLinks: [
      { title: "Quickstart", guideName: "quickstart" },
      {
        title: "Sign users in",
        guideName: "sign-in-overview/main",
        subLinks: [
          {
            title: "Redirect authentication",
            path: "#",
            subLinks: [
              {
                title: "Sign users in to your single-page application",
                guideName: "sign-into-spa-redirect",
              },
              {
                title: "Sign users in to your web application",
                guideName: "sign-into-web-app-redirect",
              },
              {
                title: "Sign users in to your mobile app",
                guideName: "sign-into-mobile-app-redirect",
              },
              {
                title: "Use redirect auth with the sample apps",
                guideName: "sampleapp-oie-redirectauth",
              },
              {
                title: "Refresh access and ID tokens",
                guideName: "oie-embedded-common-refresh-tokens",
              },
            ],
          },
          {
            title: "Embedded authentication",
            path: "#",
            subLinks: [
              {
                title: "Get set up",
                path: "#",
                subLinks: [
                  {
                    title: "Set up your Okta org",
                    guideName: "oie-embedded-common-org-setup",
                  },
                  {
                    title:
                      "Download and set up the SDK, Sign-In Widget, and sample apps",
                    guideName: "oie-embedded-common-download-setup-app",
                  },
                  {
                    title: "Run the sample apps",
                    guideName: "oie-embedded-common-run-samples",
                  },
                ],
              },
              {
                title: "Auth JS fundamentals",
                guideName: "auth-js",
              },
              {
                title: "Embedded Sign-In Widget fundamentals",
                guideName: "embedded-siw",
              },
              {
                title: "Sign in to your SPA with Auth JS",
                guideName: "sign-in-to-spa-authjs",
              },
              {
                title: "Sign in to SPA with embedded Widget",
                guideName: "sign-in-to-spa-embedded-widget",
              },
              {
                title: "Embedded SDK use cases",
                path: "#",
                subLinks: [
                  {
                    title: "Basic sign-in flow using the password factor",
                    guideName: "oie-embedded-sdk-use-case-basic-sign-in",
                  },
                  {
                    title: "Sign in with Facebook",
                    guideName: "oie-embedded-sdk-use-case-sign-in-soc-idp",
                  },
                  {
                    title: "User password recovery",
                    guideName: "oie-embedded-sdk-use-case-pwd-recovery-mfa",
                  },
                  {
                    title: "Self-registration",
                    guideName: "oie-embedded-sdk-use-case-self-reg",
                  },
                  {
                    title: "New user activation",
                    guideName: "oie-embedded-sdk-use-case-new-user-activation",
                  },
                  {
                    title: "Sign in with password and email factors",
                    guideName: "oie-embedded-sdk-use-case-sign-in-pwd-email",
                  },
                  {
                    title: "Sign in with password and phone factors",
                    guideName: "oie-embedded-sdk-use-case-sign-in-pwd-phone",
                  },
                  {
                    title: "User sign out (local app)",
                    guideName: "oie-embedded-sdk-use-case-basic-sign-out",
                  },
                  {
                    title: "SDK limitations and workarounds",
                    guideName: "oie-embedded-sdk-limitations",
                  },
                ],
              },
              {
                title: "Embedded Sign-In Widget use cases",
                path: "#",
                subLinks: [
                  {
                    title: "Load the Widget",
                    guideName: "oie-embedded-widget-use-case-load",
                  },
                  {
                    title: "Basic sign-in flow using the Widget",
                    guideName: "oie-embedded-widget-use-case-basic-sign-in",
                  },
                  {
                    title: "Sign in with Facebook using the Widget",
                    guideName: "oie-embedded-widget-use-case-sign-in-soc-idp",
                  },
                ],
              },
            ],
          },
          {
            title: "Authenticators",
            subLinks: [
              {
                title: "Okta email",
                guideName: "authenticators-okta-email",
              },
              {
                title: "Okta Verify",
                guideName: "authenticators-okta-verify",
              },
              {
                title: "Google authenticator",
                guideName: "authenticators-google-authenticator",
              },
              {
                title: "Web Authentication",
                guideName: "authenticators-web-authn",
              },
            ],
          },
          {
            title: "Configure User-Scoped account management",
            guideName: "configure-user-scoped-account-management",
          },
          {
            title: "Advanced use cases",
            subLinks: [
              {
                title: "Custom password recovery",
                guideName: "oie-embedded-sdk-use-case-custom-pwd-recovery-mfa",
              },
            ],
          },
          {
            title: "Mobile authentication",
            subLinks: [
              {
                title: "Identity Engine SDK overview",
                guideName: "mobile-idx-sdk-overview",
              },
              {
                title: "Unlock a mobile app with biometrics",
                guideName: "unlock-mobile-app-with-biometrics",
              },
              {
                title: "Build a custom sign-in UI in your mobile app",
                guideName: "build-custom-ui-mobile",
              },
              {
                title: "Share a sign-in session with native mobile apps",
                guideName: "shared-sso-android-ios",
              },
            ],
          },
          {
            title: "Configure an access policy",
            guideName: "configure-access-policy",
          },
          {
            title:
              "Configure a Global Session Policy and authentication policies",
            guideName: "configure-signon-policy",
          },
          {
            title: "Add an external Identity Provider",
            path: "/docs/guides/identity-providers/",
            subLinks: [
              {
                title: "Enterprise Identity Provider",
                guideName: "add-an-external-idp"
              },
              {
                title: "Smart Card",
                path: "/docs/guides/add-an-external-idp/smartcard/"
              },
              {
                title: "Social Login",
                guideName: "social-login"
              },
            ],
          },
          { title: "Sign users out", guideName: "sign-users-out" },
          {
            title: "Basics",
            path: "#",
            subLinks: [
              {
                title: "Create an API token",
                guideName: "create-an-api-token",
              },
              { title: "Enable CORS", guideName: "enable-cors" },
              { title: "Find your Okta domain", guideName: "find-your-domain" },
              {
                title: "Find your application credentials",
                guideName: "find-your-app-credentials",
              },
              {
                title: "Share Application Key Credentials for IdPs across Apps",
                guideName: "sharing-cert",
              },
              { title: "Set up SAML Tracer", guideName: "saml-tracer" },
              {
                title: "Upgrade SAML Apps to SHA256",
                guideName: "updating-saml-cert",
              },
              {
                title: "Sign the Okta certificate with your own CA",
                guideName: "sign-your-own-saml-csr",
              },
              {
                title: "Set up self-service registration",
                guideName: "set-up-self-service-registration",
              },
            ],
          },
        ],
      },
      {
        title: "Okta Identity Engine upgrade",
        subLinks: [
          {
            title: "Identity Engine upgrade overview",
            guideName: "oie-upgrade-overview",
          },
          {
            title: "Plan embedded auth app upgrades",
            guideName: "oie-upgrade-plan-embedded-upgrades",
          },
          {
            title: "Identity Engine limitations",
            guideName: "ie-limitations",
          },
          {
            title: "Okta Sign-In Widget upgrade",
            subLinks: [
              {
                title: "Upgrade your widget",
                guideName: "oie-upgrade-sign-in-widget",
              },
              {
                title: "Deprecated JavaScript methods in the widget",
                guideName: "oie-upgrade-sign-in-widget-deprecated-methods",
              },
              {
                title: "Updates to widget styling",
                guideName: "oie-upgrade-sign-in-widget-styling",
              },
              {
                title: "Updates to widget i18n properties",
                guideName: "oie-upgrade-sign-in-widget-i18n",
              },
            ],
          },
          {
            title: "Identity Engine SDK upgrade",
            subLinks: [
              {
                title: "Add the Identity Engine SDK to your app",
                guideName: "oie-upgrade-add-sdk-to-your-app",
              },
              {
                title: "Upgrade your application to the Identity Engine SDK",
                guideName: "oie-upgrade-api-sdk-to-oie-sdk",
              },
              {
                title: "Understand how sessions work after the upgrade",
                guideName: "oie-upgrade-sessions-api",
              },
            ],
          },
          {
            title:
              "Understand MFA enrollment policy API changes after the upgrade",
            guideName: "oie-upgrade-mfa-enroll-policy",
          },
        ],
      },
      {
        title: "Authorization",
        path: "#",
        subLinks: [
          {
            title: "Implement authorization by grant type",
            guideName: "implement-grant-type",
          },
          {
            title: "Create an Authorization Server",
            guideName: "customize-authz-server",
          },
          {
            title: "Configure SSO for Native apps",
            guideName: "configure-native-sso",
          },
          { title: "Request user consent", guideName: "request-user-consent" },
          {
            title: "Configure Device Authorization Grant Flow",
            guideName: "device-authorization-grant",
          },
          {
            title: "Client secret rotation and key management",
            guideName: "client-secret-rotation-key",
          },
          {
            title: "Tokens",
            path: "#",
            subLinks: [
              {
                title: "Build a JWT for Client Authentication",
                guideName: "build-self-signed-jwt",
              },
              {
                title: "Customize tokens returned from Okta with custom claims",
                guideName: "customize-tokens-returned-from-okta",
              },
              {
                title:
                  "Customize tokens returned from Okta with a Groups claim",
                guideName: "customize-tokens-groups-claim",
              },
              {
                title:
                  "Customize tokens returned from Okta with a dynamic allow list",
                guideName: "customize-tokens-dynamic",
              },
              {
                title:
                  "Customize tokens returned from Okta with a static allow list",
                guideName: "customize-tokens-static",
              },
              { title: "Refresh access tokens", guideName: "refresh-tokens" },
              { title: "Revoke Tokens", guideName: "revoke-tokens" },
              {
                title: "Work with Okta session cookies",
                guideName: "session-cookie",
              },
              {
                title: "Validate Access Tokens",
                guideName: "validate-access-tokens",
              },
              { title: "Validate ID Tokens", guideName: "validate-id-tokens" },
            ],
          },
        ],
      },
      {
        title: "Brand and Customize",
        path: "#",
        subLinks: [
          {
            title: "Customize the Okta URL domain",
            guideName: "custom-url-domain",
          },
          {
            title: "Style the Widget",
            guideName: "custom-widget",
          },
          {
            title: "Customize the Okta-hosted error pages",
            guideName: "custom-error-pages",
          },
          {
            title: "Customize SMS messages",
            guideName: "custom-sms-messaging",
          },
          {
            title: "Customize email notifications and email domains",
            guideName: "custom-email",
          },
          {
            title: "Customize themes",
            path: "/docs/guides/customize-themes/",
          },
        ],
      },
      {
        title: "OIN Partner Integrations",
        path: "#",
        subLinks: [
          {
            title: "Build a SCIM provisioning integration",
            subLinks: [
              {
                title: "Prepare your SCIM API service",
                path: "/docs/guides/scim-provisioning-integration-prepare/main/",
              },
              {
                title: "Connect your SCIM API service to Okta",
                path: "/docs/guides/scim-provisioning-integration-connect/main/",
              },
              {
                title: "Test your SCIM Okta integration",
                path: "/docs/guides/scim-provisioning-integration-test/main/",
              },
            ],
          },
          {
            title: "OIDC and the OIN: A Developer Primer",
            subLinks: [
              {
                title: "Protocol-level requirements",
                path: "/docs/guides/oin-oidc-protocols/main/",
              },
              {
                title: "Multi-tenancy",
                path: "/docs/guides/oin-oidc-multi-tenancy/main/",
              },
              {
                title: "OIN integration best practices",
                path: "/docs/guides/oin-oidc-best-practices/main/",
              },
            ],
          },
          {
            title: "Build a Single Sign-On (SSO) integration",
            guideName: "build-sso-integration",
          },
          { title: "Submit an app integration", guideName: "submit-app" },
        ],
      },
      {
        title: "API Security",
        path: "#",
        subLinks: [
          {
            title: "Implement OAuth for Okta",
            guideName: "implement-oauth-for-okta",
          },
          {
            title: "Implement OAuth for Okta with a Service App",
            guideName: "implement-oauth-for-okta-serviceapp",
          },
          {
            title: "Protect your API endpoints",
            guideName: "protect-your-api",
          },
          {
            title: "Integrate Third-Party Risk",
            guideName: "third-party-risk-integration",
          },
          {
            title: "Secure OAuth API connection between orgs",
            guideName: "secure-oauth-between-orgs",
          },
        ],
      },
      {
        title: "Deploy to Production",
        path: "#",
        subLinks: [
          {
            title: "Deployment checklists",
            path: "/docs/guides/deployment-checklist/main/",
          },
          { title: "Deploy your app", guideName: "deploy-your-app" },
          {
            title: "Migrate to Okta",
            path: "#",
            subLinks: [
              {
                title: "Prerequisites",
                path: "/docs/guides/migrate-to-okta-prerequisites/main/",
              },
              {
                title: "Bulk migration with credentials",
                path: "/docs/guides/migrate-to-okta-bulk/main/",
              },
              {
                title: "Import Users with Inline Password Hooks",
                path: "/docs/guides/migrate-to-okta-password-hooks/main/",
              },
            ],
          },
        ],
      },
      {
        title: "Hooks",
        path: "#",
        subLinks: [
          {
            title: "Common Hook Set-up Steps",
            guideName: "common-hook-set-up-steps",
          },
          {
            title: "Event Hook",
            guideName: "event-hook-implementation",
          },
          {
            title: "Event Hooks with ngrok",
            guideName: "event-hook-ngrok",
          },
          {
            title: "Event Hooks with Hookdeck",
            guideName: "event-hook-hookdeck",
          },
          {
            title: "Password Import Inline Hook",
            guideName: "password-import-inline-hook",
          },
          {
            title: "Registration Inline Hook",
            guideName: "registration-inline-hook",
          },
          {
            title: "Telephony Inline Hook",
            guideName: "telephony-inline-hook",
          },
          {
            title: "Token Inline Hook",
            guideName: "token-inline-hook",
          },
        ],
      },
      {
        title: "Classic archive",
        subLinks: [
          {
            title: "Auth JS fundamentals",
            guideName: "archive-auth-js",
          },
          {
            title: "Configure Okta Sign-On and App Sign-On Policies",
            guideName: "archive-configure-signon-policy",
          },
          {
            title: "Embedded Sign-In Widget fundamentals",
            guideName: "archive-embedded-siw",
          },
          {
            title: "Sign in to SPA with Auth JS",
            guideName: "archive-sign-in-to-spa-authjs",
          },
          {
            title: "Sign in to SPA with embedded Widget",
            guideName: "archive-sign-in-to-spa-embedded-widget",
          },
          {
            title: "Add multifactor authentication",
            guideName: "mfa",
          },
          {
            title: "Registration Inline Hook",
            guideName: "archive-registration-inline-hook",
          },
        ],
      },
    ],
  },
];

export const languagesSdk = [
  {
    title: "Languages & SDKs",
    path: "/code/",
    subLinks: [
      {
        title: "Server-side",
        path: "#",
        subLinks: [
          { title: ".NET", path: "/code/dotnet/aspnetcore/" },
          { title: "Go", path: "/code/go/" },
          { title: "Java", path: "/code/java/" },
          { title: "Node.js", path: "/code/nodejs/" },
          { title: "PHP", path: "/code/php/" },
          { title: "Python", path: "/code/python/" },
        ],
      },
      {
        title: "Front-end",
        path: "#",
        subLinks: [
          { title: "Angular", path: "/code/angular/" },
          { title: "React", path: "/code/react/" },
          { title: "Vue", path: "/code/vue/" },
          { title: "JavaScript", path: "/code/javascript/" },
        ],
      },
      {
        title: "Mobile/native",
        path: "#",
        subLinks: [
          { title: "Android", path: "/code/android/" },
          { title: "iOS", path: "/code/ios/" },
          { title: "React Native", path: "/code/react-native/" },
        ],
      },
      { title: "Test APIs using Postman", path: "/code/rest/" },
    ],
  },
];

export const reference = [
  {
    title: "References",
    path: "/docs/references/",
    subLinks: [
      {
        title: "Core Okta API",
        path: "/docs/references/core-okta-api/",
        subLinks: [
          {
            title: "Rate Limits",
            path: "/docs/references/rate-limits/",
            subLinks: [
              {
                title: "Rate limit dashboard",
                path: "/docs/references/rl-dashboard/",
              },
              {
                title: "Authentication/End-user rate limits",
                path: "/docs/references/rl-global-enduser/",
              },
              {
                title: "Management rate limits",
                path: "/docs/references/rl-global-mgmt/",
              },
              {
                title: "Other endpoint rate limits",
                path: "/docs/references/rl-global-other-endpoints/",
              },
              {
                title: "Additional limits",
                path: "/docs/references/rl-additional-limits/",
              },
              {
                title: "Rate limit best practices",
                path: "/docs/references/rl-best-practices/",
              },
              {
                title: "Client-based rate limits",
                path: "/docs/references/rl-clientbased/",
              },
              {
                title: "DynamicScale",
                path: "/docs/references/rl-dynamic-scale/",
              },
              {
                title: "Previous rate limits",
                path: "/docs/references/rl-previous/",
              },
              {
                title: "System Log events for rate limits",
                path: "/docs/references/rl-system-log-events/"
              },
            ]
          },
          { title: "Error Codes", path: "/docs/references/error-codes/" },
          // { title: "User query options", path: "/docs/references/user-query/" },
          { title: 'Sign in Your Users', path: 'empty'},
          { title: "Authentication", path: "/docs/references/api/authn/" },
          { title: "Identity Providers", path: "/docs/references/api/idps/" },
          { title: "OpenID Connect & OAuth 2.0 API", path: "/docs/references/api/oidc/"},
          { title: "WebFinger", path: "/docs/references/api/webfinger/" },
          { title: "Manage Okta Objects", path: "empty"},
          { title: "Administrator Roles", path: "/docs/references/api/roles/" },
          { title: "Apps", path: "/docs/references/api/apps/" },
          { title: "Authenticators Admin", path: "/docs/references/api/authenticators-admin/" },
          { title: "Authorization Servers", path: "/docs/references/api/authorization-servers/"},
          { title: "Brands", path: "/docs/references/api/brands/"},
          { title: "CAPTCHAs", path: "/docs/references/api/captchas/"},
          { title: "Devices", path: "/docs/references/api/devices/"},
          { title: "Domains", path: "/docs/references/api/domains/"},
          { title: "Dynamic Client Registration", path: "/docs/references/api/oauth-clients/"},
          { title: "Event Types", path: "/docs/references/api/event-types/" },
          { title: "Factors", path: "/docs/references/api/factors/" },
          { title: "Features", path: "/docs/references/api/features/" },
          { title: "Groups", path: "/docs/references/api/groups/" },
          { title: "Linked Objects", path: "/docs/references/api/linked-objects/"},
          { title: "Log Streaming", path: "/docs/references/api/log-streaming/"},
          { title: "Mappings", path: "/docs/references/api/mappings/" },
          { title: "MyAccount", path: "/docs/references/api/myaccount/" },
          { title: "Org", path: "/docs/references/api/org/" },
          { title: "Policy", path: "/docs/references/api/policy/" },
          { title: "Risk Events", path: "/docs/references/api/risk-events/" },
          { title: "Risk Providers", path: "/docs/references/api/risk-providers/" },
          { title: "Schemas", path: "/docs/references/api/schemas/" },
          { title: "Sessions", path: "/docs/references/api/sessions/" },
          { title: "Subscriptions", path: "/docs/references/api/admin-notifications/" },
          { title: "System Log", path: "/docs/references/api/system-log/" },
          { title: "Templates", path: "/docs/references/api/templates/" },
          { title: "ThreatInsight", path: "/docs/references/api/threat-insight/" },
          { title: "Trusted Origins", path: "/docs/references/api/trusted-origins/" },
          { title: "User Types", path: "/docs/references/api/user-types/" },
          { title: "Users", path: "/docs/references/api/users/" },
          { title: "Zones", path: "/docs/references/api/zones/" }
        ]
      },
      {
        title: "Advanced Server Access API",
        subLinks: [
          {
            title: "Introduction to the Advanced Server Access API",
            path: "/docs/references/api/asa/introduction/",
          },
          {
            title: "ASA Attributes API",
            path: "/docs/references/api/asa/attributes/",
          },
          { title: "ASA Audits API", path: "/docs/references/api/asa/audits/" },
          {
            title: "ASA Clients API",
            path: "/docs/references/api/asa/clients/",
          },
          {
            title: "ASA Entitlements API",
            path: "/docs/references/api/asa/entitlements/",
          },
          { title: "ASA Groups API", path: "/docs/references/api/asa/groups/" },
          {
            title: "ASA Projects API",
            path: "/docs/references/api/asa/projects/",
          },
          {
            title: "ASA Service Users API",
            path: "/docs/references/api/asa/service-users/",
          },
          { title: "ASA Teams API", path: "/docs/references/api/asa/teams/" },
          { title: "ASA Users API", path: "/docs/references/api/asa/users/" },
        ],
      },
      {
        title: "SCIM Protocol",
        path: "/docs/references/scim/",
        subLinks: [
          {
            title: "SCIM V2.0",
            path: "/docs/references/scim/scim-20/",
          },
          {
            title: "SCIM V1.1",
            path: "/docs/references/scim/scim-11/",
          },
        ],
      },
      {
        title: "Postman Collections",
        path: "/docs/references/postman-collections/",
      },
      {
        title: "Hooks",
        subLinks: [
          {
            title: "Event Hooks Management API",
            path: "/docs/references/api/event-hooks/",
          },
          {
            title: "Inline Hooks Management API",
            path: "/docs/references/api/inline-hooks/",
          },
          {
            title: "Inline Hook Types",
            subLinks: [
              {
                title: "Password Import Hook",
                path: "/docs/references/password-hook/",
              },
              {
                title: "Registration Hook",
                path: "/docs/references/registration-hook/",
              },
              { title: "SAML Hook", path: "/docs/references/saml-hook/" },
              {
                title: "Telephony Hook",
                path: "/docs/references/telephony-hook/",
              },
              { title: "Token Hook", path: "/docs/references/token-hook/" },
              {
                title: "User Import Hook",
                path: "/docs/references/import-hook/",
              },
            ],
          },
          {
            title: "Hooks best practices",
            path: "/docs/references/hooks-best-practices/",
          },
        ],
      },
      {
        title: "Okta Expression Language",
        path: "/docs/references/okta-expression-language/",
      },
      {
        title: "Okta Expression Language in Identity Engine",
        path: "/docs/references/okta-expression-language-in-identity-engine/",
      },
      {
        title: "Release Life Cycle",
        path: "/docs/references/releases-at-okta/",
      },
    ],
  },
];

export const releaseNotes = [
  {
    title: "Release Notes",
    path: "/docs/release-notes/",
    subLinks: [
      { title: "2022", path: "/docs/release-notes/2022/" },
      {
        title: "2022 - Okta Identity Engine",
        path: "/docs/release-notes/2022-okta-identity-engine/",
      },
      { title: "2021", path: "/docs/release-notes/2021/" },
      {
        title: "2021 - Okta Identity Engine",
        path: "/docs/release-notes/2021-okta-identity-engine/",
      },
      { title: "2020", path: "/docs/release-notes/2020/" },
      { title: "2019", path: "/docs/release-notes/2019/" },
      { title: "2018", path: "/docs/release-notes/2018/" },
      { title: "2017", path: "/docs/release-notes/2017/" },
      { title: "2016", path: "/docs/release-notes/2016/" },
    ],
  },
];
