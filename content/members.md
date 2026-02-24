---
title: Our Members
permalink: members.html
---


<style>
    #condensed p {
        margin-block: 0.25em;
        margin-inline-start: 1em;
    }
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

<div id="condensed" markdown="1">

{% split %}
    {% en %}
        {% for item in current %}
            {{ item.enname }} {{ item.emoji }}
        {% endfor %}
    {% enden %}
    {% sp %}
        {% for item in current %}
            {{ item.spname }} {{ item.emoji }}
        {% endfor %}
    {% endsp %}
{% endsplit %}





</div>

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

<div id="condensed" markdown="1">

{% split %}
{% en %}
        {% for item in former %}
            {{ item.enname }} 
        {% endfor %}

{% enden %}
{% sp %}
        {% for item in former %}
            {{ item.spname }} 
        {% endfor %}

{% endsp %}
{% endsplit %}
</div>






