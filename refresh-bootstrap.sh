echo "Initializing bootstrap submodule..."
git submodule update --init

submodulepath=.git/modules/$(grep -oP "path\s*\=\s*\K(.+)" .gitmodules)

$(cd $submodulepath; git config core.sparsecheckout true)

echo '' > $submodulepath/info/sparse-checkout
echo 'js/src/*.js' >> $submodulepath/info/sparse-checkout
echo 'scss/*.scss' >> $submodulepath/info/sparse-checkout
echo 'scss/mixins/*.scss' >> $submodulepath/info/sparse-checkout

$(cd $submodulepath; git checkout)

echo "Generating asset list for package.js..."

bootstrapJsFiles="$(find assets/bootstrap -not -path '*/\.*' -name '*.js' -type f -exec echo "'{}'" \; | grep -v '^$' | paste -s -d ',')"
sed '/jsAssets.*=.*/d' -i package.js
echo "var jsAssets = [$bootstrapJsFiles];" >> package.js

bootstrapScssFiles="$(find assets/bootstrap -not -path '*/\.*' -name '*.scss' -type f -exec echo "'{}'" \; | grep -v '^$' | paste -s -d ',')"
sed '/scssAssets.*=.*/d' -i package.js
echo "var scssAssets = [$bootstrapScssFiles];" >> package.js

echo "Generating js filenames for serve.js..."

bootstrapJsFilenames="$(find assets/bootstrap -not -path '*/\.*' -name '*.js' -type f -printf "'%f'\n" | grep -v '^$' | paste -s -d ",")"
sed '/jsAssetNames.*=.*/d' -i serve.js
echo "var jsAssetNames = [$bootstrapJsFilenames];" >> serve.js

echo "Done"
