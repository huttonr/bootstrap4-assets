bootstrapVersion="v4.0.0-alpha.2"
tetherVersion="v1.1.1"

git submodule update --init


echo "Initializing bootstrap submodule... ($bootstrapVersion)"
submodulepath=.git/modules/assets/bootstrap

$(cd $submodulepath; git config core.sparsecheckout true)

echo '' > $submodulepath/info/sparse-checkout
echo 'js/src/*.js' >> $submodulepath/info/sparse-checkout
echo 'scss/*.scss' >> $submodulepath/info/sparse-checkout
echo 'scss/mixins/*.scss' >> $submodulepath/info/sparse-checkout

$(cd $submodulepath; git pull; git checkout $bootstrapVersion)



echo "Initializing tether submodule... ($tetherVersion)"
submodulepath=.git/modules/assets/tether

$(cd $submodulepath; git config core.sparsecheckout true)

echo '' > $submodulepath/info/sparse-checkout
echo 'dist/js/tether.js' >> $submodulepath/info/sparse-checkout

$(cd $submodulepath; git pull; git checkout $tetherVersion)




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


tetherJsFiles="$(find assets/tether -not -path '*/\.*' -name '*.js' -type f -exec echo "'{}'" \; | grep -v '^$' | paste -s -d ',')"
sed '/tetherJsAssets.*=.*/d' -i package.js
echo "var tetherJsAssets = [$tetherJsFiles];" >> package.js


echo "Done"
