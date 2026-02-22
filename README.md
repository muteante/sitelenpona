© all rights reserved by the sitelen pona publishers and typographers association, 2026

# open it on your device

1. `npm install` 

2. `npx @11ty/eleventy --serve`

for less noise, add `quiet`

3. `npx @11ty/eleventy --serve --quiet`


# adding new content? 

Use this template when adding new bilingual content:


```
{% splith %}
    {% en %}English H2{% enden %}
    {% sp %}SP H2{% endsp %}
{% endsplith %}

{% split %}
{% en %}
English Content
{% enden %}

{% sp %}
SP Content
{% sp %}
```

Note: 
- split used for body, splith (with the h) used for headings
- splith heading level defaults to h2, but this can be specify

# hosting information




