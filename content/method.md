---
title: "Methodology behind Common Sitelen Pona"
sLTitle: nasin alasa pi sitelen pona kulupu
spTitle: nasin alasa pi sitelen pona kulupu
permalink: method.html
---

<style>

span:has(.tiers){
    margin: auto;
    width: fit-content;
    display: block;
}
.tiers :is(td, th){
    padding: .5rem 2rem .5rem .5rem;
    max-width: 30rem;
    vertical-align: top;
}
thead {
    border-bottom: solid 2px black;
}
.tiers{
    max-width: 50rem;
    margin: 2em;
    text-align: left;
    border-collapse: collapse
}
tbody tr:nth-child(2n-1) {
    background-color: var(--kule-1);
}
caption {
    text-align: left;
    padding-left: .5rem;
}
h3{
    margin: 2rem auto 0;
}

.tech{
    background-color: var(--kule-1);
    margin-block: 0.2rem;
    font-family: monospace;
}

    </style>


{% splith %}
    {% en %}Tiers of Teachability{% enden %}
    {% sp %}{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}


{% split %}
{% en %}
{% enden %}

{% sp %}
{% endsp %}
{% endsplit %}



<span>
<table class="tiers">
    <caption>Summarizing Tiers of Teachability<caption>
    <thead>
        <tr>
            <th>Tier #</th>
            <th>Description</th>
        </tr>
        <tbody>
            <tr>
                <td>Tier 1</td>
                <td>Almost universal, reflecting conservative interpretations of the writing system as first described in <em>Toki Pona: The Language of Good<em> (2014)</td>
            </tr>
            <tr>
                <td>Tier 2</td>
                <td>Very popular, widely used.</td>
            </tr>
            <tr>
                <td>Tier 3</td>
                <td>Somewhat popular.  Peripheral, but needed by a prominent minority. Lowest teaching priority.</td>
            </tr>
            <tr>
                <td>Tier 4</td>
                <td>Unlisted.</td>
            </tr>
        </tbody>
    </thead>
</table>
</span>






{% splith %}
    {% en %}Which words are commonly used in Sitelen Pona?{% enden %}
    {% sp %}nimi seme li wawa lon sitelen pona{% endsp %}
    {% sl %}nimi seme li wawa lon sitelen pona?{% endsl %}
{% endsplith %}

{% splith 3%}
    {% en %}Process{% enden %}
    {% sp %}nasin pi kama sona{% endsp %}
    {% sl %}nasin pi kama sona{% endsl %}
{% endsplith %}

{% split %}
{% en %}
Algorithm: Three appointed members describe words to one of four Tiers of Teachability, drawing on different sources of data. 

The three representatives were free to design their own algorithms based on their data source. 

Here are the three sources:
{% enden %}

{% sp %}
poki tu tu pi wawa sona la<br>zz jan tu wan li poki e nimi kepeken sona ante
sona ante la<br>zz jan tu wan ni^ li pali e nasin ante

{% endsp %}
{% sl %}
poki tu tu pi wawa sona la jan tu wan li poki e nimi kepeken sona ante.
{% endsl %}
sona ante la jan tu wan ni li pali e nasin ante.

{% endsplit %}

{% splith 4 %}
    {% en %}Mrs. Lang (anpa sewi){% enden %}
    {% sp %}o ante toki e nimi suli ni{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}


{% split %}
{% en %}
As the creator of the Toki Pona language and the Sitelen Pona script, Mrs. Lang has a unique decades-long view of their stability. Mrs. Lang published Sitelen Pona in *Toki Pona: The Language of Good* (2014). In 2021, Mrs. Lang conducted a series of word usage surveys, the results of which were published in the seminal book, *The Toki Pona Dictionary.*

Mrs. Lang assigned all words from the 2014 publication as Tier 1 words, and then assign the rest via discretion, informed by the *Official Toki Pona* book series and the creator's own venerable lived experience.
{% enden %}



{% sp %}
{% endsp %}
{% sl %}
{% endsl %}
{% endsplit %}

{% splith 4 %}
    {% en %}lipu Linku{% enden %}
    {% sp %}o ante toki e nimi suli ni{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}


{% split %}
{% en %}
{% enden %}

{% sp %}
{% endsp %}
{% sl %}
{% endsl %}
{% endsplit %}

{% splith 4 %}
    {% en %}ilo Muni{% enden %}
    {% sp %}o ante toki e nimi suli ni{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}


{% split %}
{% en %}
{% enden %}

{% sp %}
{% endsp %}
{% sl %}
{% endsl %}
{% endsplit %}


<span>
<table class="tiers">
<caption>Word Notability Algorithm Participants</caption>
   <thead>
       <tr>
           <th>Representative</th>
           <th>Data Source</th>
            <th>Threshold</th>
       </tr>
   </thead>
<tbody>
 <tr>
        <td>Mrs. Lang</td>
        <td>Lived experience: As the language's creator, Mrs. Lang has a unique decades-long viewer of the language's tendencies and stability. Mrs. Lang also ran her own series of word usage surveys in 2021, the results of which were published in the seminal book *The Toki Pona Dictionary.</td>
        <td>No rigid threshold, but generally corresponding to usage in Official publications. All words featured in TP:LOG immediately assigned to Tier 1.</td>
    </tr>
    <tr>
        <td>kala Asi</td>
        <td>Linku: The Linku project annually conducts a far-reaching word usage survey. The first survey occured in 2020. Analysts of Linku have been assigning words to usage categories since 2023.</td>
        <td>
Tier 1: [80%; 100%] <br>
Tier 2: [60%; 80%] <br>
Tier 3: [30%; 60%]
        </td>
    </tr>
    <tr>
        <td>mun Kekan San <br> (Tie-breaker vote)</td>
        <td>ilo Muni: A word frequency analyzer that draws on a large corpus of community data.
        TODO </td>
        <td>
        Tier 1: - 5yrs / 10% authorship <br> 
        Tier 2: - 4yrs / 7.5% authorship  <br>
        Tier 3: - 3yrs / 5% authorship<br>
        </td>
    </tr>   
</tbody>
</table>
</span>

{% splith 3 %}
    {% en %}Results{% enden %}
    {% sp %}sona sin{% endsp %}
    {% sl %}sona sin{% endsl %}
{% endsplith %}


{% split %}
{% en %}
Jump to [Tier 1 Word Glyphs]()  
Jump to [Tier 2 Word Glyphs]()  
Jump to [Tier 3 Word Glyphs]()  

Or download the raw results: 
[words-tiers.txt](/content/common/words-tiers.txt)  

{% enden %}

{% sp %}
o lukin e [nimi pi wawa nanpa wan]()  
o lukin e [nimi pi wawa nanpa tu]()  
o lukin e [nimi pi wawa nanpa tu wan]()  

o lanpan e sona ale:
[words-tiers.txt](/content/common/words-tiers.txt)  

{% endsp %}

{% sl %}
o lukin e [nimi pi wawa nanpa wan]()  
o lukin e [nimi pi wawa nanpa tu]()  
o lukin e [nimi pi wawa nanpa tu wan]()  

o lanpan e sona ale:
[words-tiers.txt](/content/common/words-tiers.txt)  

{% endsl %}

{% endsplit %}




{% splith %}
    {% en %}Which versions of glyphs are representative of those commonly used in Sitelen Pona? {% enden %}
    {% sp %}sitelen mute pi nimi wan la<br>zz sitelen seme li suli lon sitelen pona {% endsp %}
    {% sl %}sitelen mute pi nimi wan la sitelen seme li suli lon sitelen pona? {% endsl %}
{% endsplith %}


{% splith 3 %}
    {% en %}Rationale{% enden %}
    {% sp %}{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}



{% split %}
{% en %}
Common Sitelen Pona does not prescribe that a glyph be written in a certain way. We encourage font-makers to use whatever variation of the glyphs that they please. 

In presenting Common Sitelen Pona, the Association wanted to use versions of the glyphs that were commonly used, so these representative glyphs were determined algorithmically.
{% enden %}
{% sp %}
SP Content
{% endsp %}
{% endsplit %}


{% splith 3 %}
    {% en %}Process{% enden %}
    {% sp %}{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}

{% split %}
{% en %}
Algorithm: Use six sources of input to identify the most representative glyphs of for Toki Pona words that are known to have variants. Four sources of input reflect exercised discretion of invited fontmakers. Two sources of input reflect sampled handwriting data from community. 

The input sources are listed below:
{% enden %}

{% sp %}
SP Content
{% endsp %}
{% endsplit %}

{% splith 4%}
    {% en %} Ethan Corgatelli (jan Itan){% enden %}
    {% sp %}{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}


{% split %}
{% en %}
jan Itan is the creator of *nasin nanpa* (2022).

*nasin nanpa* continues to be a popular font in 2026. It carries historical notability; *nasin nanpa* was the first font that Toki Pona speakers used for Sitelen Pona texting on Discord, and it is the Sitelen Pona font for *The Wonderful Wizard of Oz (Toki Pona edition)* released in the series *Official Toki Pona*. 

On multiple occasions, the font has made strong choices that have correctly predicted (or predicated) the success of certain variant glyphs. 

jan Itan held the tiebreaker vote within this algorithmn.
{% enden %}

{% sp %}
SP Content
{% endsp %}
{% endsplit %}



{% splith 4%}
    {% en %}lipamanka {% enden %}
    {% sp %}lipamanka{% endsp %}
    {% sl %}lipamanka{% endsl %}
{% endsplith %}

{% split %}
{% en %}
lipamanka is the creator of *linja sike* (2021) and *linja lipamanka* (2023).

*linja sike* was stylized as a succesor to jan Same's *linja pona* (2016), the most prevalent font of the pre-2021 period. *linja lipamanka* reworks *linja sike* to be more visually distinct from *linja pona.* 

Both of lipamanka's fonts were influential, as lipamanka was highly responsive to requests for rare glyphs, individual name glyphs, and experimental features. lipamanka is personally responsible for many alt glyphs, either by authoring them or by promoting them into wider usage. 

lipamanka held one vote within this algorithm. 
{% enden %}



{% sp %}
SP Content
{% endsp %}
{% endsplit %}

{% splith 4 %}
    {% en %} Rebecca Bettencourt (jan Lepeka){% enden %}
    {% sp %}jan Lepeka{% endsp %}
{% endsplith %}

{% split %}
{% en %}
jan Lepeka is the creator of *Fairfax HD* and *sitelen seli kiwen* (2022).

jan Lepeka maintains the UCSUR and has been making fonts for decades. In addition to integrating Sitelen Pona into her Fairfax HD font family, which covers several other constructed scripts, she also made the popular handwritten font family, *sitelen seli kiwen*. There are separate versions of the family for ASCII-input, Unicode-input, monospaced, and non-monospaced. 

These two font families are held in very high esteem. They are the most completionist fonts created to date, preserving many rare glyphs. Because of the robust coverage offered by these fonts, they are often used in community dictionaries like [nimi.li](https://nimi.li/).

jan Lepeka held one vote within this algorithm. 
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}
{% endsplit %}

{% splith 4%}
    {% en %} waso Keli and SP Font Maker {% enden %}
    {% sp %}{% endsp %}
    {% sl %}{% endsl %}
{% endsplith %}


{% split %}
{% en %}
waso Keli is the creator of *leko majuna* (2022) and the tool, SP Font Maker (2024). 

SP Font Maker is a tool waso Keli developed to study glyph variance. Users of the SP Font Maker submit a template with the glyphs they prefer to include in their font. Later, waso Keli manually annotates and tabulates preferences across user templates. 

*leko majuna* is a pixelated font developed for use in a video game translation. It  was the first font to contain a diagonal variant of the *ni* (pointing arrow) glyph.

waso Keli tabled two votes within this algorithm. The majority preference of SP Font Maker users held one vote, while waso Keli herself held one vote.  
{% enden %}

{% sp %}

{% endsp %}
{% endsplit %}


{% splith 4 %}
    {% en %}Handwriting Corpus{% enden %}
    {% sp %}o ante toki e nimi suli ni{% endsp %}
{% endsplith %}

{% split %}
{% en %}
musi ike Majeka transcribed 698 samples of handwritten Sitelen Pona shared online, annotating features and alternative glyphs. In total, well over 25k glyphs were scrutinized. 

The majority preference of submissions from the handwriting corpus held one vote within this algorithm. Where musi ike Majeka determined that no strong preference was evident, the corpus would not receive a vote.  
{% enden %}

{% sp %}
o pana e sitelen pona lon ni
{% endsp %}
{% endsplit %}

{% splith 3 %}
    {% en %}Results{% enden %}
    {% sp %}o ante toki e nimi suli ni{% endsp %}
{% endsplith %}

{% split %}
{% en %}
Jump to [Word Glyphs]()  

Or download the [raw results for representative glyphs](/content/common/representative-glyphs.txt).

{% enden %}

{% sp %}

{% endsp %}
{% endsplit %}

{% splith %}
    {% en %}Which non-word features are commonly used in Sitelen Pona?{% enden %}
    {% sp %}sitelen seme pi nimi ala li wawa lon sitelen pona{% endsp %}
    {% sl %}sitelen seme pi nimi ala li wawa lon sitelen pona{% endsl %}
{% endsplith %}


{% split %}
{% en %}
English Content
{% enden %}

{% sp %}
SP Content
{% endsp %}
{% endsplit %}


{% splith %}
    {% en %}Which non-word glyphs should be combined with existing Unicode equivelants? {% enden %}
    {% sp %}sitelen seme pi nimi ala li kepeken nanpa pi sitelen pona{% endsp %}
    {% sl %}sitelen seme pi nimi ala li kepeken nanpa pi sitelen pona? {% endsl %}
{% endsplith %}

{% split %}
{% en %}
For most of the punctuation glyphs in Common Sitelen Pona, the answer to this is self-evident. 

Novel glyphs that have no existing Unicode equivalent are recommended to have new codepoint. Glyphs that have an equivelant are recommended to rely on existing codepoints. 

Reccommended to be mapped to existing codepoints:
- <span class="tech">ZERO WIDTH SPACE</span>
- <span class="tech">ZERO WIDTH JOINER</span>
- <span class="tech">IDEOGRAPHIC SPACE</span>
- <span class="tech">LEFT CORNER BRACKET</span>
- <span class="tech">RIGHT CORNER BRACKET</span>



Recommended to be assigned new codepoints:
- <span class="tech">SITELEN PONA START OF CARTOUCHE</span>, <span class="tech">SITELEN PONA END OF CARTOUCHE</span>
- <span class="tech">SITELEN PONA STACKING JOINER</span>
- <span class="tech">SITELEN PONA NESTING JOINER</span>
- <span class="tech">SITELEN PONA START OF LONG GLYPH</span>
- <span class="tech">SITELEN PONA END OF LONG GLYPH</span>
- <span class="tech">SITELEN PONA COMBINING TALLY MARK</span>
- <span class="tech">SITELEN PONA MIDDLE DOT</span>
- <span class="tech">SITELEN PONA COLON</span>


<span class="tech">SITELEN PONA MIDDLE DOT</span> and <span class="tech">SITELEN PONA COLON</span> form an exceptional case. These two glyphs are [routinely rendered in cartouches](https://sona.pona.la/wiki/nasin_sitelen_kalama). As this behaviour deviates significantly from that expected of Unicode's <span class="tech">MIDDLE DOT</span> and <span class="tech">COLON</span>, and  we recommend that <span class="tech">SITELEN PONA MIDDLE DOT</span> and <span class="tech">SITELEN PONA COLON</span> be assigned new codepoints and not be combined with Unicode equivelants.. 
{% enden %}

{% sp %}
SP Content
{% endsp %}
{% endsplit %}