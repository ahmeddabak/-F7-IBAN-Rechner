<template>
    <!-- App -->
    <div id="app">

        <!-- Statusbar -->
        <f7-statusbar></f7-statusbar>

        <!-- Main Views -->
        <f7-views>
            <f7-view id="main-view" navbar-through main>
                <!-- Navbar -->
                <f7-navbar>
                    <f7-nav-center sliding>IBAN Rechner</f7-nav-center>
                </f7-navbar>
                <!-- Pages -->
                <f7-pages>
                    <f7-page tabbar-labels-fixed>
                        <f7-tabs>
                            <f7-tab id="rechner-tab" active>
                                <f7-block inner>
                                    <p>
                                        Schnell und einfach die IBAN berechnen.
                                    </p>
                                </f7-block>
                                <f7-list form v-show="!prettyIBAN">
                                    <!-- Select | country -->
                                    <f7-list-item>
                                        <f7-label>Land</f7-label>
                                        <f7-input type="select" v-model="country">
                                            <option value="DE">Deutschland</option>
                                            <option value="EN">England *not implemnted</option>
                                            <option value="FR">Niederlande *not implemnted</option>
                                        </f7-input>
                                    </f7-list-item>

                                    <!-- Text Input | accountNumber number -->
                                    <f7-list-item>
                                        <f7-label>Kontonummer</f7-label>
                                        <f7-input type="number" placeholder="Hier Kontonummer angeben" v-model="accountNumber" required/>
                                    </f7-list-item>

                                    <!-- Text Input | blz -->
                                    <f7-list-item>
                                        <f7-label>BLZ</f7-label>
                                        <f7-input type="number" placeholder="Hier BLZ angeben" v-model="blz" required/>
                                    </f7-list-item>

                                </f7-list>
                                <f7-button big round raised full active v-on:click="calculate" v-show="!prettyIBAN">IBAN zeigen</f7-button>


                                <f7-list form v-show="prettyIBAN">

                                    <f7-list-item>
                                        <f7-label>Konto</f7-label>
                                        <f7-input type="text" v-model="accountNumber" disabled/>
                                    </f7-list-item>

                                    <f7-list-item>
                                        <f7-label>BLZ</f7-label>
                                        <f7-input type="text" v-model="blz" disabled/>
                                    </f7-list-item>

                                    <f7-list-item>
                                        <f7-label>Bank</f7-label>
                                        <f7-input type="textarea" v-model="bezeichnung" disabled/>
                                    </f7-list-item>


                                    <f7-list-item>
                                        <f7-label>Kurzname</f7-label>
                                        <f7-input type="text" v-model="kurzbezeichnung" disabled/>
                                    </f7-list-item>

                                    <f7-list-item>
                                        <f7-label>Ort</f7-label>
                                        <f7-input type="text" v-model="ort" disabled/>
                                    </f7-list-item>
                                </f7-list>
                                <f7-list form v-show="prettyIBAN">

                                    <f7-list-item>
                                        <f7-label>IBAN</f7-label>
                                        <f7-input type="text" v-model="prettyIBAN" disabled/>
                                    </f7-list-item>

                                    <f7-list-item>
                                        <f7-label>BIC</f7-label>
                                        <f7-input type="text" v-model="bic" disabled/>
                                    </f7-list-item>
                                </f7-list>

                                <f7-button big round raised full active v-show="prettyIBAN" v-on:click="copyToClipboard">IBAN in Zwischenablage kopieren</f7-button>

                            </f7-tab>
                            <f7-tab id="pruefung-tab">
                                <f7-block inner>
                                    <p>
                                        Schnell und einfach eine IBAN auf Echtheit überprüfen.
                                    </p>
                                </f7-block>
                                <f7-list form>
                                    <!-- Text Input | IBAN -->
                                    <f7-list-item>
                                        <f7-label>IBAN.</f7-label>
                                        <f7-input type="text" placeholder="IBAN eingeben" v-model="iban"/>
                                    </f7-list-item>
                                </f7-list>
                                <f7-button big round raised full active v-on:click="check">IBAN prüfen</f7-button>
                            </f7-tab>
                            <f7-tab id="ideenkonzept-tab">
                                <f7-block-title>IBAN Rechner</f7-block-title>

                                <div class="list-block accordion-list">
                                    <ul>

                                        <li class="accordion-item"><a href="#" class="item-content item-link">
                                            <div class="item-inner">
                                                <div class="item-title">Allgemein</div>
                                            </div>
                                        </a>
                                            <div class="accordion-item-content">
                                                <div class="content-block">
                                                    <p>
                                                        Die Agentur am Niederrhein für Kampagnen im Online- und Offlinebereich.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="accordion-item"><a href="#" class="item-content item-link">
                                            <div class="item-inner">
                                                <div class="item-title">Kontakt</div>
                                            </div>
                                        </a>
                                            <div class="accordion-item-content">
                                                <div class="content-block">
                                                    <p>
                                                        Ideenkonzept <br>
                                                        Apollopassage 32<br>
                                                        46483 Wesel
                                                    </p>
                                                    <p>
                                                        Telefon: 0281 4755410<br>
                                                        Telefax: 0281 4755412
                                                    </p>
                                                    <p>
                                                        info@ideenkonzept.de<br>
                                                        www.ideenkonzept.de
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="accordion-item"><a href="#" class="item-content item-link">
                                            <div class="item-inner">
                                                <div class="item-title">Impressum</div>
                                            </div>
                                        </a>
                                            <div class="accordion-item-content">
                                                <div class="content-block">
                                                    <p>
                                                        Markus Meier<br>
                                                        Bagelstr. 93<br>
                                                        46485 Wesel
                                                    </p>
                                                    <p>
                                                        Telefon: 0281 4755410<br>
                                                        Telefax: 0281 4755412
                                                    </p>
                                                    <p>
                                                        E-Mail: markus@ideenkonzept.de
                                                    </p>
                                                    <p>
                                                        Die IBAN Recher App wird betreut durch:<br>
                                                        Ideenkonzept<br>
                                                        Apollopassage 32<br>
                                                        46483 Wesel
                                                    </p>
                                                    <p>
                                                        info@ideenkonzept.de<br>
                                                        www.ideenkonzept.de
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </f7-tab>
                        </f7-tabs>
                        <f7-toolbar tabbar labels toolbar-fixed>
                            <f7-link active icon="fa fa-calculator" color="blue" text="Rechner" tab-link="#rechner-tab"></f7-link>
                            <f7-link icon="fa fa-check-circle" text="Prüfung" color="blue" tab-link="#pruefung-tab"></f7-link>
                            <f7-link icon="fa fa-info" text="Ideenkonzept" color="blue" tab-link="#ideenkonzept-tab"></f7-link>
                        </f7-toolbar>
                    </f7-page>
                </f7-pages>

            </f7-view>
        </f7-views>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                country: 'DE',
                accountNumber: '',
                blz: '',
                iban: '',
                prettyIBAN: '',
                bezeichnung: '',
                kurzbezeichnung: '',
                ort: '',
                bic: ''
            }
        },
        methods: {
            modulo(divident, divisor) {
                return Array.from(divident).map(c => parseInt(c)).reduce((remainder, value) => (remainder * 10 + value) % divisor, 0);
            },
            isIBAN(iban) {
                const rearranged = iban.substring(4, iban.length) + iban.substring(0, 4);
                const numeric = Array.from(rearranged).map(c => (isNaN(parseInt(c)) ? (c.charCodeAt(0) - 55).toString() : c)).join('');
                const remainder = Array.from(numeric).map(c => parseInt(c)).reduce((remainder, value) => (remainder * 10 + value) % 97, 0);

                return remainder === 1;
            },
            getValidAccountNumberNumberFrom(accountNumber) {
                let validAccountNumberNumber = accountNumber;
                while (validAccountNumberNumber.length < 10) {
                    validAccountNumberNumber = '0' + validAccountNumberNumber;
                }
                return validAccountNumberNumber;
            },
            getValidCheckDigitsFrom(remainder) {
                if (remainder < 10) {
                    return remainder * 10
                }
                return remainder;
            },
            countryCodeToDigits(countryCode, addedDigits) {
                let codesArray = {
                    'A': '10',
                    'B': '11',
                    'C': '12',
                    'D': '13',
                    'E': '14',
                    'F': '15',
                    'G': '16',
                    'H': '17',
                    'I': '18',
                    'J': '19',
                    'K': '20',
                    'L': '21',
                    'M': '22',
                    'N': '23',
                    'O': '24',
                    'P': '25',
                    'Q': '26',
                    'R': '27',
                    'S': '28',
                    'T': '29',
                    'U': '30',
                    'V': '31',
                    'W': '32',
                    'X': '33',
                    'Y': '34',
                    'Z': '35',
                };

                let countryDigit = '';
                for (let i = 0; i < countryCode.length; i++) {
                    countryDigit += codesArray[countryCode.slice(i, i + 1)];
                }

                return countryDigit + addedDigits;
            },
            bankDetailsFromBLZ(blz) {
                let db = require('./assets/js/de');
                for (let i = 0; i < db.length; i++) {
                    if (db[i].Bankleitzahl == blz) {
                        return db[i];
                    }
                }
            },
            prettyPrintIBAN(iban) {
                for (let i = 4; i < iban.length; i = i + 5) {
                    iban = iban.slice(0, i) + ' ' + iban.slice(i);
                }

                return iban;
            },
            calculate() {
                if (this.accountNumber.trim().length === 0) {
                    return this.$f7.alert('Bitte eine Kontonummer angegeben.', 'Kontonummer fehlt');
                }

                if (this.blz.trim().length === 0) {
                    return this.$f7.alert('Bitte eine BLZ angegeben.', 'BLZ fehlt');
                }
                if (this.country.trim().length === 0) {
                    return this.$f7.alert('Bitte zuerst ein Land angeben.','Land auswählen' );
                }

                let bankDetails = this.bankDetailsFromBLZ(this.blz)

                if (!bankDetails) {
                    return this.$f7.alert('Die angegebene BLZ ist falsch.', 'BLZ falsch');
                }


                let validAccountNumber = this.getValidAccountNumberNumberFrom(this.accountNumber);

                let last6 = this.countryCodeToDigits(this.country, '00');

                let remainder = this.modulo(this.blz + validAccountNumber + last6, 97);

                let checkDigits = this.getValidCheckDigitsFrom(98 - remainder);

                this.bezeichnung = bankDetails.Bezeichnung;
                this.kurzbezeichnung = bankDetails.Kurzbezeichnung;
                this.ort = bankDetails.Ort;
                this.bic = bankDetails.BIC;

                this.iban = this.country + checkDigits + this.blz + validAccountNumber;

                this.prettyIBAN = this.prettyPrintIBAN(this.iban);
            },
            copyToClipboard() {
                cordova.plugins.clipboard.copy(this.iban);
            },
            check() {

                if (this.iban.trim().length === 0) {
                    return this.$f7.alert('Bitte ein IBAN angegeben.', 'IBAN fehlt');
                }

                if (!this.isIBAN(this.iban)) {
                    return this.$f7.alert('The IBAN number you gave is not valid, please check the IBAN and try again.', 'Oops');
                }

                return this.$f7.alert('You got it right, all valid here.', 'Oops');
            }
        }
    }
</script>
