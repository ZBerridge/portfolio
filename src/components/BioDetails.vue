<template>
    <div id="bio-details" class="container fade-in">
        <div class="row">
            <div class="col-12 font-white"><!--  v-html="content" -->
                <div class="bio-details row">
                    <div class="col-12">
                        <h2>
                            Zack Berridge
                        </h2>
                    </div>
                    <div class="col-12">
                <span class="intro">
                    <div class="job-title">Position: Web Developer</div>
                    <div class="current-employment">Place of Employment: Wakefly, Inc</div>
                    <div class="cms-experience">
                        <span>CMS Experience:</span>
                        <ul class="cms-list">
                            <li>Wordpress</li>
                            <li>Kentico</li>
                            <li>Umbraco</li>
                        </ul>
                    </div>
                    <div class="prog-languages">
                        <span>Programming Languages:</span>
                        <ul class="lang-list">
                            <li>PHP</li>
                            <li>C#</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                    <div class="frameworks-technologies">
                        <span>Frameworks and Technologies:</span>
                        <ul class="tech-list">
                            <li>JQuery</li>
                            <li>Vue.js</li>
                            <li>.NET</li>
                            <li>.NET Core</li>
                            <li>LinQ</li>
                            <li>Apache</li>
                            <li>IIS</li>
                            <li>Azure</li>
                            <li>Sass + CSS</li>
                            <li>NPM, Webpack, and Node.js</li>
                        </ul>
                    </div>
                    <div class="portfolio">
                        <span>Sites I've built or majorly contributed to:</span>
                        <ul class="work-list">
                            <li>
                                <a href="http://recognition.wakefly.com" target="_blank">Wakefly Internal Recognition site (Wordpress + Vue)</a>
                            </li>
                            <li>
                                <a href="https://icanthrive.org" target="_blank">Thrive, Inc (Wordpress)</a>
                            </li>
                            <li>
                                <a href="https://speedqueencommercial.com" target="_blank">SpeedQueen Commercial (Kentico with a .NET Core REST API I built supplying data)</a>
                            </li>
                            <li>
                                <a href="https:speedqueen.com" target="_blank">SpeedQueen (complete redesign of product pages)</a>
                            </li>
                        </ul>
                    </div>
                </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Axios from 'axios'
    export default {
        name: "BioDetails",
        data () {
            return {
                content: '',
                errors: Array()
            }
        },
        methods: {
            loadContent(){
                Axios.get('/wp-json/zb/v1/zb-post-slug?slug=biodetails').then(response => {
                    this.content = response.data
                })
                .catch( e => {
                    this.errors.push(e)
                })
            }
        },
        mounted() {
           //this.loadContent()
        }
    }
</script>
