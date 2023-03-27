(function () {
  document.getElementById('overview-code').code = `<cpy-alert type="primary" icon="home" dismissible>
  <!-- slotted content for alert message -->
  This is a success alert
  <!-- slot for additional content -->
  <div slot="content">Some additional text about the success alert</div>
</cpy-alert>

<script>
  document.querySelector('cpy-alert')
    .addEventListener('closed', (e) => console.log('Alert closed event!'));
</script>`;
  document.getElementById('alert-comp').addEventListener('closed', (e) => console.log('Alert closed event!'));
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-alert-bg', description: 'Background colour of alert', defaultValue: 'transparent' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'appearance', description: 'Alert styles', type: "'border' | 'soft'", default: "'soft'", required: false },
    { name: 'container', description: 'Whether the alert has a container', type: 'boolean', default: "true", required: false },
    { name: 'icon', description: 'The icon (if any) to show', type: 'string', default: "", required: false },
    { name: 'type', description: 'Colour scheme of the alert', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'error'", required: false },
    { name: 'dismissible', description: 'Whether the alert can be dismissed (does not work with alert container set to false)', type: "boolean", default: "false", required: false }
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'closed', description: 'Triggered when the alert dismiss button is clicked', emitsType: "" }
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Title of the alert' },
    { slotName: "'content'", purpose: 'Description/additional information for the alert' },
  ];
})();
