
Package.describe({
  name: 'huttonr:bootstrap4-assets', // If this is changed then the hard-coded path in plugin/bootstrap4.js must also be changed
  summary: 'By itself this package does nothing.  It contains assets for use by huttonr:bootstrap4.',
  version: '4.0.0_3',
  git: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('isobuild:compiler-plugin@1.0.0');

  api.addFiles('serve.js', 'server');
  api.addAssets('assets/defaults/bootstrap-settings.default.json', 'server');
  api.addAssets(jsAssets, 'server');
  api.addAssets(scssAssets, 'server');

  api.export(['_bootstrapGetAsset']);
  api.export(['_bootstrapGetJsList']);
});

// Do not edit this list, it is generated by the bash script, run the script instead
var jsAssets = ['assets/bootstrap/js/src/alert.js','assets/bootstrap/js/src/button.js','assets/bootstrap/js/src/carousel.js','assets/bootstrap/js/src/collapse.js','assets/bootstrap/js/src/dropdown.js','assets/bootstrap/js/src/modal.js','assets/bootstrap/js/src/popover.js','assets/bootstrap/js/src/scrollspy.js','assets/bootstrap/js/src/tab.js','assets/bootstrap/js/src/tooltip.js','assets/bootstrap/js/src/util.js'];
var scssAssets = ['assets/bootstrap/scss/_alert.scss','assets/bootstrap/scss/_animation.scss','assets/bootstrap/scss/_breadcrumb.scss','assets/bootstrap/scss/_button-group.scss','assets/bootstrap/scss/_buttons.scss','assets/bootstrap/scss/_card.scss','assets/bootstrap/scss/_carousel.scss','assets/bootstrap/scss/_close.scss','assets/bootstrap/scss/_code.scss','assets/bootstrap/scss/_custom-forms.scss','assets/bootstrap/scss/_dropdown.scss','assets/bootstrap/scss/_forms.scss','assets/bootstrap/scss/_grid.scss','assets/bootstrap/scss/_images.scss','assets/bootstrap/scss/_input-group.scss','assets/bootstrap/scss/_jumbotron.scss','assets/bootstrap/scss/_labels.scss','assets/bootstrap/scss/_list-group.scss','assets/bootstrap/scss/_media.scss','assets/bootstrap/scss/_mixins.scss','assets/bootstrap/scss/_modal.scss','assets/bootstrap/scss/_nav.scss','assets/bootstrap/scss/_navbar.scss','assets/bootstrap/scss/_normalize.scss','assets/bootstrap/scss/_pager.scss','assets/bootstrap/scss/_pagination.scss','assets/bootstrap/scss/_popover.scss','assets/bootstrap/scss/_print.scss','assets/bootstrap/scss/_progress.scss','assets/bootstrap/scss/_reboot.scss','assets/bootstrap/scss/_responsive-embed.scss','assets/bootstrap/scss/_tables.scss','assets/bootstrap/scss/_tooltip.scss','assets/bootstrap/scss/_type.scss','assets/bootstrap/scss/_utilities-responsive.scss','assets/bootstrap/scss/_utilities-spacing.scss','assets/bootstrap/scss/_utilities.scss','assets/bootstrap/scss/_variables.scss','assets/bootstrap/scss/bootstrap-flex.scss','assets/bootstrap/scss/bootstrap-grid.scss','assets/bootstrap/scss/bootstrap-reboot.scss','assets/bootstrap/scss/bootstrap.scss','assets/bootstrap/scss/mixins/_alert.scss','assets/bootstrap/scss/mixins/_background-variant.scss','assets/bootstrap/scss/mixins/_border-radius.scss','assets/bootstrap/scss/mixins/_breakpoints.scss','assets/bootstrap/scss/mixins/_buttons.scss','assets/bootstrap/scss/mixins/_center-block.scss','assets/bootstrap/scss/mixins/_clearfix.scss','assets/bootstrap/scss/mixins/_forms.scss','assets/bootstrap/scss/mixins/_gradients.scss','assets/bootstrap/scss/mixins/_grid-framework.scss','assets/bootstrap/scss/mixins/_grid.scss','assets/bootstrap/scss/mixins/_hide-text.scss','assets/bootstrap/scss/mixins/_hover.scss','assets/bootstrap/scss/mixins/_image.scss','assets/bootstrap/scss/mixins/_label.scss','assets/bootstrap/scss/mixins/_list-group.scss','assets/bootstrap/scss/mixins/_nav-divider.scss','assets/bootstrap/scss/mixins/_navbar-align.scss','assets/bootstrap/scss/mixins/_pagination.scss','assets/bootstrap/scss/mixins/_progress.scss','assets/bootstrap/scss/mixins/_pulls.scss','assets/bootstrap/scss/mixins/_reset-filter.scss','assets/bootstrap/scss/mixins/_reset-text.scss','assets/bootstrap/scss/mixins/_resize.scss','assets/bootstrap/scss/mixins/_responsive-visibility.scss','assets/bootstrap/scss/mixins/_screen-reader.scss','assets/bootstrap/scss/mixins/_size.scss','assets/bootstrap/scss/mixins/_tab-focus.scss','assets/bootstrap/scss/mixins/_table-row.scss','assets/bootstrap/scss/mixins/_text-emphasis.scss','assets/bootstrap/scss/mixins/_text-truncate.scss'];
