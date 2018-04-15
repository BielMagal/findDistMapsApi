# findDistMapsApi

<h1>Function</h1>
<p>Developed to be used as a script for google sheets, using Google Maps API, this script get the distance or time travel from one address to another.</p>

<h1>Parameters</h1>
<h3>Use parameters</h3>
<ul>
  <li>start_address: the starting address.</li>
  <li>end_address: the final address.</li>
  <li>type_mode: mean of transport, can be 'car', 'bus' or 'foot'.</li>
  <li>return_type: the return types can be distance (KM) or time (Minutes).</li>
</ul>
<h3>Code parameters</h3>
<ul>
  <li>city_address: the sufix from both address (can be empty if address already complete).</li>
  <li>car: the name you want to give to car parameter.</li>
  <li>foot: the name you want to give to foot parameter.</li>
  <li>bus: the name you want to give to bus parameter.</li>
  <li>distance: the name you want to give to distance parameter.</li>
  <li>duration: the name you want to give to duration parameter.</li>
</ul>

<h1>Configuration</h1>
<ul>
  <li>Login in google</li>
  <li>At Google Sheets go to Tools->Script Editor</li>
  <li>Copy the code from this findDistMapsApi.gs to Code.gs</li>
  <li>Edit code parameters as you need (city_address, car, foot, bus, distance and duration)</li>
  <li>Go to Resources->Advanced Google Services and enable Google Sheets API</li>
  <li>Also need to enable in <a href="https://console.cloud.google.com/apis/library/sheets.googleapis.com/?q=sheets">Google Console</a> and generate a free API key</li>
  <li>Save (Ctrl+S or click on save button)</li>
  <li>Run (Run->Run function->findDist or click on play button)</li>
  <li>Now you can go to Google Sheets and using this script</li>
</ul>

<h1>Usage</h1>
  <p> In a Google Sheets cell, you can set '=findDist(start_address, end_address, type_mode, return_type)'</p>
  
 <h2>Hope this script help and any doubt contact me</h2>
 <ul>Observation
  <li>Some times this function get an ERROR message, but, if it's all right you can try again and get the result</li>
  <li>The Google free API has use daily limit</li>
 </ul>
