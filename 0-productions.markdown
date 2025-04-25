---
layout: default
title: Productions
permalink: /productions/
thumbnail: /assets/img/thumbnails/ninja_express_001.png
order: 1
---

Showreel

{% include showreel.html id="123456789" %}

<section class="productions-section">

  <div class="productions-grid">
    {% for production in site.data.productions %}
      <div class="production-card">
        <img src="{{ production.image }}" alt="{{ production.title }} poster" class="production-poster">
        <div class="production-info">
          <h2>{{ production.title }}</h2>
          <p><strong>Role:</strong> {{ production.role }}</p>
          <p><strong>Type:</strong> {{ production.type }}</p>
          <p><strong>Year:</strong> {{ production.year }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</section>