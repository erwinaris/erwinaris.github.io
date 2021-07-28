# Add sbin directories to PATH.  This is useful on systems that have sudo

[ -z "${PATH##*/sbin*}" ] || PATH=$PATH:/sbin:/usr/sbin

export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools

export PATH=$PATH:~/MobileApps/flutter/bin/

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="/home/erwin/.sdkman"
[[ -s "/home/erwin/.sdkman/bin/sdkman-init.sh" ]] && source "/home/erwin/.sdkman/bin/sdkman-init.sh"


cowsay -f dragon mulai dari hal kecil !! maksimalkan bisnis dengan satu sentuhan bersama kami slahirtech.com | lolcat && figlet -f bubble "SLAHIR TECHNOLOGY" | lolcat

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
