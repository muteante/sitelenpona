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
        width: 12rem;
        overflow: visible;
        text-align: center;
        justify-content: center;
        display: grid;
    }
    .condensed [lang="en"]{
        white-space: nowrap;
    }
    .condensed .sp{
        display: block;
        white-space: nowrap;
        grid-column: 1 / 3;
        
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

<ul class="condensed">
{% for item in current %}
<li><span lang="en"> {{ item.enname }}</span><span class="emoji">{{ item.emoji }}</span><span class="sp">{{item.spname}}</span> </li>
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
    {% en %}Former Members{% enden %}
    {% sp %}seme li weka tan kulupu {% endsp %}
{% endsplith %}

<ul class="condensed">
{% for item in former %}
<li><span>{{ item.emoji }}</span><span lang="en"> {{ item.enname }}</span><span class="sp">{{item.spname}}</span> </li>
{% endfor %}
</ul>





