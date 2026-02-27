---
title: Our Members
permalink: members.html
---


<style>

    .condensed {
        margin: 2em auto;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        row-gap: 1.5em;
        justify-content: center;
        width: 45rem;
        max-width: 100%;
        list-style-type: none;
    }
    .condensed li {
        padding: 0;
        margin: 0;
        width: 14rem;
        overflow: visible;
        text-align: center;
        justify-content: center;
        align-items: start;
        display: grid;
        column-gap: 0.3rem;
        position: relative;
        height: 2.5em;
    }
    .condensed [lang="en"]{
        white-space: nowrap;
    }
    .condensed .sp{
        display: block;
        white-space: nowrap;
        grid-column: 1 / 3;
    }
    .condensed summary {
        position: relative;
    }
    .condensed details:not([open]):hover summary{
        color: var(--jelo-8)
    }
    .condensed details[open]{
        position: absolute;
        right: 0;
        top: -1rem;
        left: 0;
        z-index: 1;
        background-color: white;
        border: 0.1em solid var(--jelo-5);
        border-radius: 0.5rem;
        list-style-type: none;
        padding: 1rem 0.25em;
        opacity: 0.95;
    }
    .condensed summary:focus-visible{
        outline: none;
    }
 


    

    
    max-width: 20em;
</style>

{% assign all = members %}
{% assign current = members | where: 'listed', 'true' %}
{% assign others = members | where: 'listed', 'false' %}
{% assign former = former %}



{% splith %}
    {% en %}Current Members{% enden %}
    {% sp %}seme li lon kulupu{% endsp %}
{% endsplith %}


{% split %}
{% en %}
    There are currently {{ all | size }} members in the association.   
{% enden %}
{% sp %}
    tenpo ni la mi {{ all | size | nnp }} li lon kulupu pali pi sitelen pona
{% endsp %}
{% endsplit %}

<ul class="condensed shuffle">
{% for item in current %}
    <li>
        <details name="current">
        <summary>
        <span lang="en"> {{ item.enname }}</span><span class="emoji">{{ item.emoji }}</span><span class="sp">{{item.spname}}</span></summary>
        {% for ijo in item.titles %}<p>{{ ijo }}</p>{% endfor %}
        </details>
    </li>
{% endfor %}
</ul>



{% split %}
{% en %}
    {{ others | size }} other members are not listed here.
{% enden %}
{% sp %}
    mi {{ others | size | nnp }} li lon kulupu li pana ala e nimi mi tawa lipu
{% endsp %}
{% endsplit %}


{% splith %}
    {% en %}Association President{% enden %}
    {% sp %}jan lawa kulupu{% endsp %}
{% endsplith %}


{% split %}
{% en %}
Gregory Danielson III is serving as the association's president as of <time datetime="2026-01-22">January 22, 2026</time>. 

{% enden %}
{% sp %}

mun lawa [ken . kalama . nasa][mute:] li kama jan lawa kulupu  
<time datetime="2026-01-22">
zz lon tenpo suno nanpa mute tu lon tenpo mun nanpa wan   
zz lon tenpo sike nanpa mute ale mute luka wan </time>

{% endsp %}
{% endsplit %}




{% splith %}
    {% en %}Former Members{% enden %}
    {% sp %}seme li weka tan kulupu {% endsp %}
{% endsplith %}

<ul class="condensed shuffle">
{% for item in former %}
<li><span>{{ item.emoji }}</span><span lang="en"> {{ item.enname }}</span><span class="sp">{{item.spname}}</span> </li>
{% endfor %}
</ul>

<script>
    function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

document.querySelectorAll('ul.shuffle').forEach(ul => {
  const items = Array.from(ul.querySelectorAll('li'));
  shuffleArray(items).forEach(item => ul.appendChild(item));
});

const detailsList = document.querySelectorAll('.condensed details');
detailsList.forEach((details) => {
  details.addEventListener('focusin', (e) => {
    if (!e.target.matches(':focus-visible')) return;

    detailsList.forEach((other) => {
      if (other !== details && other.open) {
        other.open = false;
      }
    });
  });
});


</script>






