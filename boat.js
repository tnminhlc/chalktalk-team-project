function () {
    this.float = 0.1;
    this.label = 'boat';
    this.xtopleft = 1;
    this.xtopright = 4;
    this.xbottomleft = 1.5;
    this.xbottomright = 3.5;

    this.onSwipe[0] = ["Float right", function() {
        this.floatingRight = ! this.floatingRight;
    }];

    this.onSwipe[4] = ["Float left", function() {
        this.floatingLeft = ! this.floatingLeft;
    }];

	this.render = function () {
	    mLine([this.xtopleft,3],[this.xtopright,3]); 
        mLine([this.xbottomleft,2],[this.xbottomright,2]);
        mLine([this.xtopleft,3],[this.xbottomleft,2]);
        mLine([this.xtopright,3],[this.xbottomright,2]);

        if (this.floatingRight) {
            this.xtopleft += this.float;
            this.xtopright += this.float;
            this.xbottomleft += this.float;
            this.xbottomright += this.float;
            if (this.xtopright > 6) {
                this.xtopleft = 1;
                this.xtopright = 4;
                this.xbottomleft = 1.5;
                this.xbottomright = 3.5;
            }
            mLine([this.xtopleft,3],[this.xtopright,3]); 
            mLine([this.xbottomleft,2],[this.xbottomright,2]);
            mLine([this.xtopleft,3],[this.xbottomleft,2]);
            mLine([this.xtopright,3],[this.xbottomright,2]);
        }
    
        if (this.floatingLeft) {
            this.xtopleft -= this.float;
            this.xtopright -= this.float;
            this.xbottomleft -= this.float;
            this.xbottomright -= this.float;
            if (this.xtopright < 2) {
                this.xtopleft = 1;
                this.xtopright = 4;
                this.xbottomleft = 1.5;
                this.xbottomright = 3.5;
            }
            mLine([this.xtopleft,3],[this.xtopright,3]); 
            mLine([this.xbottomleft,2],[this.xbottomright,2]);
            mLine([this.xtopleft,3],[this.xbottomleft,2]);
            mLine([this.xtopright,3],[this.xbottomright,2]);
        }
    }
}  