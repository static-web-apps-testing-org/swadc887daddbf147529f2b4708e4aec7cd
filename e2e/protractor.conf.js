// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
// SIG // Begin signature block
// SIG // MIIregYJKoZIhvcNAQcCoIIrazCCK2cCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // 7gRGNOgyMThF3YUQQbw5guDN82sBgjlFygnqEChJBaag
// SIG // ghFuMIIIfjCCB2agAwIBAgITNgAAAd9zgZcWvjL9DQAC
// SIG // AAAB3zANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjQwMTIwMDEz
// SIG // MzQ0WhcNMjUwMTE5MDEzMzQ0WjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1bnAJpGyFqbK
// SIG // WMrMsnUMskYdi/KuYoGBXMtrw5PMRr1TEQYccGzrCSBH
// SIG // dMGPDe1lP8YJGDJ0rDOL5nNgePQxnawI0iam7MdM3/gy
// SIG // xY6wSE1HnHUYZatFShl/FG1TpINGiHxTS0bOA0qwmWId
// SIG // us8gfKpC/41Jgew4XARIYYDpV0UOCx51L+6n/ol6g7sB
// SIG // c/bVEwIfCRrIC0QStKErEX1AfhSRdislMc5nhVySohMp
// SIG // 7Fs+JKqDPdWoNWMNFPHdHvkYACotxbdXFwPt6ijOiNR9
// SIG // dXvzXSI4e6E4b6wbXxJ4MJcG0xdymTh3YSwRWdfFOL/F
// SIG // Xk5W+K/eN+OgmNvkip0GuwIDAQABo4IFijCCBYYwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEOMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUju4tKpnu7Y7YxY8r
// SIG // iI5ZhjOnGwkwDgYDVR0PAQH/BAQDAgeAMEUGA1UdEQQ+
// SIG // MDykOjA4MR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xFjAUBgNVBAUTDTIzNjE2Nys1MDE5NzAwggHm
// SIG // BgNVHR8EggHdMIIB2TCCAdWgggHRoIIBzYY/aHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraWluZnJhL0NSTC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMS5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMi5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsMy5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshjFodHRwOi8vY3JsNC5hbWUuZ2Js
// SIG // L2NybC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshoG9
// SIG // bGRhcDovLy9DTj1BTUUlMjBDUyUyMENBJTIwMDEoMiks
// SIG // Q049QlkyUEtJQ1NDQTAxLENOPUNEUCxDTj1QdWJsaWMl
// SIG // MjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1D
// SIG // b25maWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlm
// SIG // aWNhdGVSZXZvY2F0aW9uTGlzdD9iYXNlP29iamVjdENs
// SIG // YXNzPWNSTERpc3RyaWJ1dGlvblBvaW50MB8GA1UdIwQY
// SIG // MBaAFJZRhOBrb3v+2Aarw/KF5imuavnUMB8GA1UdJQQY
// SIG // MBYGCisGAQQBgjdbAQEGCCsGAQUFBwMDMA0GCSqGSIb3
// SIG // DQEBCwUAA4IBAQCXv2FzUgqF4rS3/1+aXyWaXqd3LI3a
// SIG // pgYIPvCq/vvFzI1sHZuLYi2rCTFDwoJqeTWJ98AuBnnx
// SIG // mMHxe15thTEkdoukFB44oBrugY3VkIeBMBmjaly5F5VD
// SIG // O1sNmdCq0baQi9egwjkzWbghTwMrUhxbJD1q6+qtxAbo
// SIG // jOj+VS4BUiogMXLp5XSaK26wa72UmYm9TiDcxRgELM1E
// SIG // dMraL1uhTqfrqFYYkAqpzoXgtaaZ2T7LO7516KIMjtMY
// SIG // EluNG0ZZbRn8J5TndyGf+N2To+V3nkoYOdks1RIsmK2Y
// SIG // w9ezEjc0DNSSiNO/prQAuw/nmf/oNqTP/daB3Kw6vTau
// SIG // EK0tMIII6DCCBtCgAwIBAgITHwAAAFHqj/accwyoOwAA
// SIG // AAAAUTANBgkqhkiG9w0BAQsFADA8MRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRAw
// SIG // DgYDVQQDEwdhbWVyb290MB4XDTIxMDUyMTE4NDQxNFoX
// SIG // DTI2MDUyMTE4NTQxNFowQTETMBEGCgmSJomT8ixkARkW
// SIG // A0dCTDETMBEGCgmSJomT8ixkARkWA0FNRTEVMBMGA1UE
// SIG // AxMMQU1FIENTIENBIDAxMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAyZpSCX0Bno1W1yqXMhT6BUlJ
// SIG // ZWpa4p3xFeiTHO4vm2Q6C/azR5xwxnyYHrkSGDtS2P9X
// SIG // +KDE64V20mmEQkubxnPNeOVnE2RvdPGxgwlq+BhS3ONd
// SIG // VsQPj79q7XgHM9HhzB9+qk0PC9KN1zm9p/seyiRS6JF1
// SIG // dbOqRf1pUl7FAVxmgiCFgV8hHIb/rDPXig7FDi3S0yEx
// SIG // 2CUDVpIq8jEhG8anUFE1WYxM+ni0S5KHwwKPKV4qyGDo
// SIG // DO+9AmDoma3Chyu5WDlW5cdtqXTWsGPE3umtnX6Amlld
// SIG // UFLms4OVR4guKf+n5LIBCC6bTiocfXPomqYjYTKx7AGM
// SIG // faVLaaXmhQIDAQABo4IE3DCCBNgwEgYJKwYBBAGCNxUB
// SIG // BAUCAwIAAjAjBgkrBgEEAYI3FQIEFgQUEmgkQiFHy9Rr
// SIG // vjHPIKTACyN/P0cwHQYDVR0OBBYEFJZRhOBrb3v+2Aar
// SIG // w/KF5imuavnUMIIBBAYDVR0lBIH8MIH5BgcrBgEFAgMF
// SIG // BggrBgEFBQcDAQYIKwYBBQUHAwIGCisGAQQBgjcUAgEG
// SIG // CSsGAQQBgjcVBgYKKwYBBAGCNwoDDAYJKwYBBAGCNxUG
// SIG // BggrBgEFBQcDCQYIKwYBBQUIAgIGCisGAQQBgjdAAQEG
// SIG // CysGAQQBgjcKAwQBBgorBgEEAYI3CgMEBgkrBgEEAYI3
// SIG // FQUGCisGAQQBgjcUAgIGCisGAQQBgjcUAgMGCCsGAQUF
// SIG // BwMDBgorBgEEAYI3WwEBBgorBgEEAYI3WwIBBgorBgEE
// SIG // AYI3WwMBBgorBgEEAYI3WwUBBgorBgEEAYI3WwQBBgor
// SIG // BgEEAYI3WwQCMBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIA
// SIG // QwBBMAsGA1UdDwQEAwIBhjASBgNVHRMBAf8ECDAGAQH/
// SIG // AgEAMB8GA1UdIwQYMBaAFCleUV5krjS566ycDaeMdQHR
// SIG // CQsoMIIBaAYDVR0fBIIBXzCCAVswggFXoIIBU6CCAU+G
// SIG // MWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2lpbmZy
// SIG // YS9jcmwvYW1lcm9vdC5jcmyGI2h0dHA6Ly9jcmwyLmFt
// SIG // ZS5nYmwvY3JsL2FtZXJvb3QuY3JshiNodHRwOi8vY3Js
// SIG // My5hbWUuZ2JsL2NybC9hbWVyb290LmNybIYjaHR0cDov
// SIG // L2NybDEuYW1lLmdibC9jcmwvYW1lcm9vdC5jcmyGgaps
// SIG // ZGFwOi8vL0NOPWFtZXJvb3QsQ049QU1FUm9vdCxDTj1D
// SIG // RFAsQ049UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049
// SIG // U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUs
// SIG // REM9R0JMP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Q
// SIG // b2ludDCCAasGCCsGAQUFBwEBBIIBnTCCAZkwRwYIKwYB
// SIG // BQUHMAKGO2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9w
// SIG // a2lpbmZyYS9jZXJ0cy9BTUVSb290X2FtZXJvb3QuY3J0
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMi5hbWUuZ2Js
// SIG // L2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcGCCsGAQUF
// SIG // BzAChitodHRwOi8vY3JsMy5hbWUuZ2JsL2FpYS9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMS5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MIGiBggrBgEFBQcwAoaBlWxkYXA6Ly8vQ049
// SIG // YW1lcm9vdCxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIw
// SIG // U2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJh
// SIG // dGlvbixEQz1BTUUsREM9R0JMP2NBQ2VydGlmaWNhdGU/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jZXJ0aWZpY2F0aW9uQXV0
// SIG // aG9yaXR5MA0GCSqGSIb3DQEBCwUAA4ICAQBQECO3Tw/o
// SIG // 317Rrd7yadqcswPx1LvIYymkaTN6KcmuRt6HKa0Xe73U
// SIG // x2/AQ30TfgA9GBJngweRykKBusRzyOU17iIubJvy3gA2
// SIG // 1dwtqtB0DsoEv1U/ptVu2v++doTCJ/i+GbssVXkgaX8H
// SIG // +6EOGEmT4evp4GbwR4HwWlc+Dvf8HH8PdUA2Z04CvcwI
// SIG // fckSipbNm84jxJ8XjmTFTWscldL9edj2NsY6iGnyJFIy
// SIG // ur2PS7VRYyV3p1VAJp91gj1jRQtWEyCB8P5g9nE3z8u0
// SIG // ANaU/hjwEQCrdGyravWgnf2JtG+bT26YAokbc8m+32zU
// SIG // tXRO+NK3tAjhOu2FdsG3qNrF4sc7y37R/C+7Pcb/cFfh
// SIG // ttqsirepZii4xStcjMODYuXzGm3IJs0b0owHG6oKd7ZO
// SIG // GvHpmmh9K8/DLriD/sq8bURD10qi/wuW8zM7IpLg1vcR
// SIG // 9dIK2mc0pj44pc6UX0XbttP/VEJgu3lT2eI9VjWtaKjx
// SIG // 38xE9woSMyekPRtzTwgfuysF9DkJisr+yA4po/FPxpbB
// SIG // w9c/hBf32DH/GFxteS2pmjgKIbMP8sDukmEq3lVvuWNJ
// SIG // sybrZwQvQpvaM49fv+JKpLK5YWYEfwksYRR9wU8Hh/ID
// SIG // 9hRCEkbUoQ2W7mMpsp2Nbp/kcn4ivfolUy3Q9Yf0scsQ
// SIG // 6WTLYpm+AoCUJTGCGWQwghlgAgEBMFgwQTETMBEGCgmS
// SIG // JomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixkARkWA0FN
// SIG // RTEVMBMGA1UEAxMMQU1FIENTIENBIDAxAhM2AAAB33OB
// SIG // lxa+Mv0NAAIAAAHfMA0GCWCGSAFlAwQCAQUAoIGuMBkG
// SIG // CSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisGAQQB
// SIG // gjcCAQsxDjAMBgorBgEEAYI3AgEVMC8GCSqGSIb3DQEJ
// SIG // BDEiBCAaDLcipPVzFheZ/xrOU8IufuZV/PVN5JmNz0ef
// SIG // xfmCazBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBpAGMA
// SIG // cgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBAF3Y3Y7feyLW
// SIG // CQ1+1Bv7aw+hdVsUqVsHUyxSfJKJIrS0gLUtluB2Q5x5
// SIG // v8RxWhjLSmKmeBCfq75GW5zx57kRZZC88I4MkrFTW3ll
// SIG // s9auJRGVwfEDNvlKC5blJi46Mok+2Nj+5m5Y/wckhA5K
// SIG // rh52t1vTFbt+Ap40fAOFX3577VPtkCRGcmaEQeCTaioX
// SIG // 0+noh/UUtoWurHnoRJJxQTzJys3fBtQspQs4tshCXf2r
// SIG // YtRHCGj6G2rc2h1KCtKFm09m4TMdQ759zD3+BHXn0gfd
// SIG // NUEFwiMDqDpyJNb1gZ21qe/YMKRR77+UJVCkQx9res4i
// SIG // bdIztq1GudTMpWPPEhenUEqhghcsMIIXKAYKKwYBBAGC
// SIG // NwMDATGCFxgwghcUBgkqhkiG9w0BBwKgghcFMIIXAQIB
// SIG // AzEPMA0GCWCGSAFlAwQCAQUAMIIBWQYLKoZIhvcNAQkQ
// SIG // AQSgggFIBIIBRDCCAUACAQEGCisGAQQBhFkKAwEwMTAN
// SIG // BglghkgBZQMEAgEFAAQgyuTUvRV807JDQGnZQyR5faMT
// SIG // 0JdYnuHOBo198xcD4nkCBmaXtqps8BgTMjAyNDA3MTky
// SIG // MTE4MDQuNzM3WjAEgAIB9KCB2KSB1TCB0jELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IEly
// SIG // ZWxhbmQgT3BlcmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQL
// SIG // Ex1UaGFsZXMgVFNTIEVTTjo4NkRGLTRCQkMtOTMzNTEl
// SIG // MCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vy
// SIG // dmljZaCCEXswggcnMIIFD6ADAgECAhMzAAAB3V1XHZXU
// SIG // raobAAEAAAHdMA0GCSqGSIb3DQEBCwUAMHwxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBU
// SIG // aW1lLVN0YW1wIFBDQSAyMDEwMB4XDTIzMTAxMjE5MDcw
// SIG // OVoXDTI1MDExMDE5MDcwOVowgdIxCzAJBgNVBAYTAlVT
// SIG // MRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdS
// SIG // ZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xLTArBgNVBAsTJE1pY3Jvc29mdCBJcmVsYW5k
// SIG // IE9wZXJhdGlvbnMgTGltaXRlZDEmMCQGA1UECxMdVGhh
// SIG // bGVzIFRTUyBFU046ODZERi00QkJDLTkzMzUxJTAjBgNV
// SIG // BAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZpY2Uw
// SIG // ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQCo
// SIG // TgOUROoud5x1ER+JZ3yi6fvSb4qbk7XLWoqwsTFEqz0s
// SIG // uQlitg7a4kD/k+dh12zdoOwJLUNaUGW0wxhcyundN72G
// SIG // Dawj7iSvj0bD9hT1Q4wV8uZqy0RcyBxy2ogGqGxObxSb
// SIG // qMWdGVnSjArPGnI4R1Jn2mPu/fwke7jfgePsYyasL3aV
// SIG // P5qdJgKt3mq8h/gCpr+pZK0DfM4K3GwoB8LKr76k+pRB
// SIG // amKYu7ip+zAGG0ni3tKTHWrVeRFujVZ1zGDk0Srhj38n
// SIG // wSnUobmpS6PPJBu6mtpmwOZe+/l9OiQHrDJKMmK+P/Qo
// SIG // AxYx1KXB0jg7o5RQSjItevM0XS3q3aVtGwV/RA7sdswT
// SIG // DGhCvDcsWsAhLgKu/vu5LRQG5d4VCrbs2AtRVGblJdga
// SIG // ulNe0uAirKkd4rS0/ajXG9qQCeI6yA3ZZeU4KKnn+YKb
// SIG // /mHLwTPN+G1xTcMrXd7oww9uD/Q3fMX1Sb7po7AUEJCu
// SIG // U/6stx60CfLndZx0r7RVYuUmv7mxrmBKUvIBehg1jefy
// SIG // m73hZHbKE1SD6PKZFoYz7NEO5wOfrgcUAeM5YxIys+Vl
// SIG // uwQOMKZhZtuH4QZkY1eDW6fp+/HIAI7w0n05QOg2AXL9
// SIG // pMdSR9nSIWkZ0njl3j0+oTBdCJeffCzLtK8N+VYlFnAE
// SIG // JFDVE8UZ6hhcc+cPmbrDAwIDAQABo4IBSTCCAUUwHQYD
// SIG // VR0OBBYEFG6i9baMj1HaRcsh0gylo9COJcPxMB8GA1Ud
// SIG // IwQYMBaAFJ+nFV0AXmJdg/Tl0mWnG1M1GelyMF8GA1Ud
// SIG // HwRYMFYwVKBSoFCGTmh0dHA6Ly93d3cubWljcm9zb2Z0
// SIG // LmNvbS9wa2lvcHMvY3JsL01pY3Jvc29mdCUyMFRpbWUt
// SIG // U3RhbXAlMjBQQ0ElMjAyMDEwKDEpLmNybDBsBggrBgEF
// SIG // BQcBAQRgMF4wXAYIKwYBBQUHMAKGUGh0dHA6Ly93d3cu
// SIG // bWljcm9zb2Z0LmNvbS9wa2lvcHMvY2VydHMvTWljcm9z
// SIG // b2Z0JTIwVGltZS1TdGFtcCUyMFBDQSUyMDIwMTAoMSku
// SIG // Y3J0MAwGA1UdEwEB/wQCMAAwFgYDVR0lAQH/BAwwCgYI
// SIG // KwYBBQUHAwgwDgYDVR0PAQH/BAQDAgeAMA0GCSqGSIb3
// SIG // DQEBCwUAA4ICAQAuVNmyDS4FyB1mzHKlbn/Y5FE/yvM8
// SIG // iwb7uYfCa6mEds/3mjtsqNTqHPUocr8W3vRmQ7u5JFM8
// SIG // UsidSGZLGWcOhQ6usmTU9zxIwBJ0RKUQS/Evpm14PjuF
// SIG // S0tC0pm/FyGYi7GqmdHwxHL9x3gPv8v6ipwkFpF4IaWh
// SIG // DMBjEM0ZIRsHBnV69cxqUOx08b37ue8RcWV9TJCp1hRD
// SIG // Serq3fuLXlIF49J4CDsf/5d1zCtx7fE9vs7xiTQBfuf+
// SIG // agZO569O/cyAmxV78bYnTTeXqF3VvvawCJEvlBg9fQGX
// SIG // Qa7benWfjnQKrgYg5GEOZFX1DCkt9ch0DhoJhcbgjs06
// SIG // Vh2pa6qXSJZbMvCjbI+VPbDjYlgHfTzZchBx20GQ5ovf
// SIG // wTZTmMk7dGHoS2w6L5mVDWs5O/TnfwPde5qgnU6qxMcA
// SIG // RlD2zD/v73WFKmibKbqQZ1LYzn/++gwIVcvHv3us0ffD
// SIG // 5KZZpYjtm6y90N6w+vmQlXaxjPUZuoVAwQZL2IfmI5hn
// SIG // XEORwelk/UXnPPqgx5m4S4V+GXWmq3efzl3i24Mdn+y+
// SIG // EEEI9yoKo6gzliJ1YTRNYGLU1ix3uPPNnf5Oy7otCtYP
// SIG // BGayg+5mjq7CSyjypXoHHifRQqmNbA1ClIUWtBB1FvmZ
// SIG // Ci5aISq0uxcI3ayDVpDwYG0M5wo3RNpuO0I02zCCB3Ew
// SIG // ggVZoAMCAQICEzMAAAAVxedrngKbSZkAAAAAABUwDQYJ
// SIG // KoZIhvcNAQELBQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // MjAwBgNVBAMTKU1pY3Jvc29mdCBSb290IENlcnRpZmlj
// SIG // YXRlIEF1dGhvcml0eSAyMDEwMB4XDTIxMDkzMDE4MjIy
// SIG // NVoXDTMwMDkzMDE4MzIyNVowfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTAwggIiMA0GCSqGSIb3DQEBAQUAA4IC
// SIG // DwAwggIKAoICAQDk4aZM57RyIQt5osvXJHm9DtWC0/3u
// SIG // nAcH0qlsTnXIyjVX9gF/bErg4r25PhdgM/9cT8dm95VT
// SIG // cVrifkpa/rg2Z4VGIwy1jRPPdzLAEBjoYH1qUoNEt6aO
// SIG // RmsHFPPFdvWGUNzBRMhxXFExN6AKOG6N7dcP2CZTfDlh
// SIG // AnrEqv1yaa8dq6z2Nr41JmTamDu6GnszrYBbfowQHJ1S
// SIG // /rboYiXcag/PXfT+jlPP1uyFVk3v3byNpOORj7I5LFGc
// SIG // 6XBpDco2LXCOMcg1KL3jtIckw+DJj361VI/c+gVVmG1o
// SIG // O5pGve2krnopN6zL64NF50ZuyjLVwIYwXE8s4mKyzbni
// SIG // jYjklqwBSru+cakXW2dg3viSkR4dPf0gz3N9QZpGdc3E
// SIG // XzTdEonW/aUgfX782Z5F37ZyL9t9X4C626p+Nuw2TPYr
// SIG // bqgSUei/BQOj0XOmTTd0lBw0gg/wEPK3Rxjtp+iZfD9M
// SIG // 269ewvPV2HM9Q07BMzlMjgK8QmguEOqEUUbi0b1qGFph
// SIG // AXPKZ6Je1yh2AuIzGHLXpyDwwvoSCtdjbwzJNmSLW6Cm
// SIG // gyFdXzB0kZSU2LlQ+QuJYfM2BjUYhEfb3BvR/bLUHMVr
// SIG // 9lxSUV0S2yW6r1AFemzFER1y7435UsSFF5PAPBXbGjfH
// SIG // CBUYP3irRbb1Hode2o+eFnJpxq57t7c+auIurQIDAQAB
// SIG // o4IB3TCCAdkwEgYJKwYBBAGCNxUBBAUCAwEAATAjBgkr
// SIG // BgEEAYI3FQIEFgQUKqdS/mTEmr6CkTxGNSnPEP8vBO4w
// SIG // HQYDVR0OBBYEFJ+nFV0AXmJdg/Tl0mWnG1M1GelyMFwG
// SIG // A1UdIARVMFMwUQYMKwYBBAGCN0yDfQEBMEEwPwYIKwYB
// SIG // BQUHAgEWM2h0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9w
// SIG // a2lvcHMvRG9jcy9SZXBvc2l0b3J5Lmh0bTATBgNVHSUE
// SIG // DDAKBggrBgEFBQcDCDAZBgkrBgEEAYI3FAIEDB4KAFMA
// SIG // dQBiAEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUw
// SIG // AwEB/zAfBgNVHSMEGDAWgBTV9lbLj+iiXGJo0T2UkFvX
// SIG // zpoYxDBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3Js
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9N
// SIG // aWNSb29DZXJBdXRfMjAxMC0wNi0yMy5jcmwwWgYIKwYB
// SIG // BQUHAQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1Jvb0Nl
// SIG // ckF1dF8yMDEwLTA2LTIzLmNydDANBgkqhkiG9w0BAQsF
// SIG // AAOCAgEAnVV9/Cqt4SwfZwExJFvhnnJL/Klv6lwUtj5O
// SIG // R2R4sQaTlz0xM7U518JxNj/aZGx80HU5bbsPMeTCj/ts
// SIG // 0aGUGCLu6WZnOlNN3Zi6th542DYunKmCVgADsAW+iehp
// SIG // 4LoJ7nvfam++Kctu2D9IdQHZGN5tggz1bSNU5HhTdSRX
// SIG // ud2f8449xvNo32X2pFaq95W2KFUn0CS9QKC/GbYSEhFd
// SIG // PSfgQJY4rPf5KYnDvBewVIVCs/wMnosZiefwC2qBwoEZ
// SIG // QhlSdYo2wh3DYXMuLGt7bj8sCXgU6ZGyqVvfSaN0DLzs
// SIG // kYDSPeZKPmY7T7uG+jIa2Zb0j/aRAfbOxnT99kxybxCr
// SIG // dTDFNLB62FD+CljdQDzHVG2dY3RILLFORy3BFARxv2T5
// SIG // JL5zbcqOCb2zAVdJVGTZc9d/HltEAY5aGZFrDZ+kKNxn
// SIG // GSgkujhLmm77IVRrakURR6nxt67I6IleT53S0Ex2tVdU
// SIG // CbFpAUR+fKFhbHP+CrvsQWY9af3LwUFJfn6Tvsv4O+S3
// SIG // Fb+0zj6lMVGEvL8CwYKiexcdFYmNcP7ntdAoGokLjzba
// SIG // ukz5m/8K6TT4JDVnK+ANuOaMmdbhIurwJ0I9JZTmdHRb
// SIG // atGePu1+oDEzfbzL6Xu/OHBE0ZDxyKs6ijoIYn/ZcGNT
// SIG // TY3ugm2lBRDBcQZqELQdVTNYs6FwZvKhggLXMIICQAIB
// SIG // ATCCAQChgdikgdUwgdIxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // LTArBgNVBAsTJE1pY3Jvc29mdCBJcmVsYW5kIE9wZXJh
// SIG // dGlvbnMgTGltaXRlZDEmMCQGA1UECxMdVGhhbGVzIFRT
// SIG // UyBFU046ODZERi00QkJDLTkzMzUxJTAjBgNVBAMTHE1p
// SIG // Y3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZpY2WiIwoBATAH
// SIG // BgUrDgMCGgMVADYjRxll2zWgz8Z8og2xDnIkoxYQoIGD
// SIG // MIGApH4wfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UE
// SIG // AxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAw
// SIG // DQYJKoZIhvcNAQEFBQACBQDqRNfKMCIYDzIwMjQwNzE5
// SIG // MjAxNzE0WhgPMjAyNDA3MjAyMDE3MTRaMHcwPQYKKwYB
// SIG // BAGEWQoEATEvMC0wCgIFAOpE18oCAQAwCgIBAAICCMAC
// SIG // Af8wBwIBAAICEkMwCgIFAOpGKUoCAQAwNgYKKwYBBAGE
// SIG // WQoEAjEoMCYwDAYKKwYBBAGEWQoDAqAKMAgCAQACAweh
// SIG // IKEKMAgCAQACAwGGoDANBgkqhkiG9w0BAQUFAAOBgQCn
// SIG // YDS9fxPZSFUIniF7rlwcP93RzReeQs4Btifhr+nhWM2T
// SIG // EB79qaFPKWHk8bK1+A8e+c+8eH+mGJ5wjphjslUiGpeV
// SIG // FiUPg+xfzO4QlGVCILPykth4jvjNKDiHewjvB7tyTSNL
// SIG // ec9SOo4QzR6LgrK+sCpl1so7afwIRXbP3l8DFTGCBA0w
// SIG // ggQJAgEBMIGTMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAk
// SIG // BgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAy
// SIG // MDEwAhMzAAAB3V1XHZXUraobAAEAAAHdMA0GCWCGSAFl
// SIG // AwQCAQUAoIIBSjAaBgkqhkiG9w0BCQMxDQYLKoZIhvcN
// SIG // AQkQAQQwLwYJKoZIhvcNAQkEMSIEIIwSn4EFinLtVx2o
// SIG // Uq3tVW4c3Zrqzh2q+RLy7MUQuG7cMIH6BgsqhkiG9w0B
// SIG // CRACLzGB6jCB5zCB5DCBvQQgYf8OLZplrE94mZx7R9FZ
// SIG // N+1AjdNpUcWPkYjjesAxY2YwgZgwgYCkfjB8MQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBQQ0EgMjAxMAITMwAAAd1dVx2V1K2q
// SIG // GwABAAAB3TAiBCC3yUfi/oRg1dECJU9NUfzDCsTZ/fcC
// SIG // BRu1GfQ8gb97QzANBgkqhkiG9w0BAQsFAASCAgA/kwbf
// SIG // FQh7Dn6Z0R/sF8A+5g5JkTn5TcJnpOicJOIMb+USXqQz
// SIG // irtp2vhF6I+NYwCbbYdfwjIJicg7VMrSBxRNaW9C4Yp/
// SIG // YiN6GPHCoxVfbCRCdmoQCz47n19opl76+kSoTFoTNGEp
// SIG // eu8gdWlsGDwO4l3i20l6KsI9oyDf0CIMmMbghfyi6IxH
// SIG // jvzY+j5FCQLk334YW3jlS3hnm9zaW2pvHPbBuehT4qKt
// SIG // v/2/SfV9mObC7ADQdmC7nDLjEQOhHTVw9dKQ3ddYdhLG
// SIG // itSOo/eOz7/eDerHXaSsujhSw6GdrgG8hJA5+WJCiMKf
// SIG // kaJ/ak+fTbxmeQ6CsvUhkEacP0Xi4or5X3FoROg5784T
// SIG // W+qExmENT0hmApK6lch+7pEp5b/fGDdOm9JEq5IqywZD
// SIG // d39y8w0Vo0GiFMzSyUL3ZXyCz8k6DPDo7dbrMahqv5R3
// SIG // HP673b++FTyuZ//C8oha2R0KxcsDNxWUM1mT6a9RxMFm
// SIG // 9ye0ElfLIhpaQk4i7ZMCWqnBSzsqcZC1TJKiXG6cuyol
// SIG // f5/uYgKTN8jYHHsr2+sHKHdjS/tYjpD4pwenRtK0XuBj
// SIG // CV350RCLORtZ28xpqBw9K1dsTzejgEauEUfEjGiNzHgs
// SIG // n+GYUu4b4qTQaqOn4MwqtVNoXh4UncyJTphonEl7vjev
// SIG // d7uLqSFpX95NV6Aw3A==
// SIG // End signature block