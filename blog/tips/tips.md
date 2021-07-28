make a default zsh in linux:

install git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

1. chsh -s $(which zsh)

if you replace again on bash follow it:

2. chsh -s $(which bash)
