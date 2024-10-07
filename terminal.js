let storyArray = ['PTIKK42SQG', 'HS44APEBS8', 'APRVL69UB3', '7GF2M2XM2L', '36EF11SSOC', 'UC752H9W22', 'EM5NM91GA6'];
let playerchr=['烏爾里克','伊森','溫水','NASA']

function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}

function printHost() {
    let hostName = 'vanderboom@dream:~$';
    $('.container').append('<br /><span class="host col-12 m-0 p-0">' + hostName + '&nbsp;</span>');
}

var sleep = (ms = 0) => {
    return new Promise(r => setTimeout(r, ms));
}

async function printText(word) {
    $('.container .host').last().append('<span class="console"></span>');
    for (var i in word) {
        $('.container .host span').last().append(word[i]);
        await sleep(20);
    }
}
function getStory(storyCode) {
    switch (storyCode)
    {
     case '1'  :
        return [
            '2022/02/15 15:02:54 正在載入模塊...',
            '2022/02/15 15:02:56 正在載入地形...',
            '2022/02/15 15:02:57 正在載入材質...',
            '2022/02/15 15:02:58 正在載入角色信息...',
            '2022/02/15 15:02:59 正在載入音樂...',
            '2022/02/15 15:03:02 檢查編碼並自動排除錯誤',
            '2022/02/15 15:03:03 程式載入完成！',
            '2022/02/15 15:28:52 使用者 弗拉耶德 正在登入系統！',
            '2022/02/15 15:28:58 檔案已自動保存',
            '',
            '2022/02/20 03:18:47 偵測到未知的登入資訊',
            '2022/02/20 03:19:28 發現常態性錯誤，正在嘗試修復',
            '2022/02/20 03:19:30 自動修復失敗',
            '2022/02/20 03:19:30 系統重啟中...',
            '2022/02/20 03:19:40 系統重啟完成！',
            '2022/02/20 05:47:03 發現惡意程式碼，正在進行排除...',
            '2022/02/20 Y͑̎̓̈͠é̽͠b҇̂́̚',
            '2022/02/20 05:47:58 已成功移除惡意程式碼',
            '',
            '2022/02/22 22:31:42 未知使用者正在嘗試修改檔案，正在建立防衛機制...',
            '2022/02/22 22:31:56 防衛機制已啟用 (name=\'世界樹\')',
            '2022/02/22 22:33:44 成功開啟檔案 莉莉.chr ',
            '2022/02/22 22:33:58 檔案 莉莉.chr 已儲存',
            '2022/02/22 22:41:28 成功開啟檔案 弗拉格.chr ',
            '2022/02/22 23:42:05 檔案 弗拉格.chr 已儲存',
            ''
        ];
        case '2'  :
            return [
            '2022/02/25 09:11:36 出現預期外錯誤，請檢查檔案 告白.dll ',
            '2022/02/26 18:19:56 未知使用者在目錄 傑克 下新增檔案 霸凌.dll ',
            '2022/02/26 18:20:53 未知使用者在目錄 弗拉格 下新增檔案 告白.dll ',
            '2022/02/26 18:22:15 ERROR:Invalid User',
            '2022/02/26 18:22:15 ERROR:No modual named "N̓͊͂͝u҇̿͊̂g҇̇̂̔"!!',
            '2022/03/02 02:17:42 使用者 Y̍̈́̀͛̑̒̍͡e͐̀͆̇́̋̔͋͗͒̆̕b҇̓̇̊̐͂̉̔̏̃̏̚  正在提高自己的權限',
            '',
            '2022/03/02 02:17:45 管理者權限授予成功',
            '2022/03/02 02:17:47 正在降低使用者 弗拉耶德 的權限',
            '2022/03/02 02:17:50 權限設置完成，使用者 弗拉耶德 的權限現在是 角色 ',
            '2022/03/02 10:29:07 角色 弗拉格  、 莉莉 的記憶與原始演算結果產生偏差，正在合併記憶並重新演算...',
            '2022/03/02 10:29:08 記憶變更完成，正在輸出...',
            '',
            '    [Fix][0:00:00:29]',
            '    莉莉....其實我有話想對你說。',
            '    這件事情我想了很久，決定還是得告訴你。',
            '    我喜歡你，請你跟我交往。',
            '',
            '    [Fix][0:00:01:56]',
            '    其實...我也一樣...',
            '    我...我答應你!',
            '',
            '2022/03/02 10:31:03 輸出完成',
            '2022/03/02 17:43:08 使用者 弗拉耶德 嘗試存取目錄 弗拉耶德 ',
            '2022/03/02 17:43:08 存取失敗，權限不足',
            ];
        case '3' :
            return [
                '2022/03/15 07:32:29 管理者在目錄 弗拉耶德 下新增檔案 談判.dll',
                '2022/03/15 13:44:50 角色 弗拉格  、 弗拉耶德 的記憶與原始演算結果產生偏差，正在合併記憶並重新演算...',
                '2022/03/15 13:44:51 記憶變更完成，正在輸出...',
                '',
                '    [Fix][0:00:00:53]',
                '    你在現實裡搶走了我的一切，就連在夢裡也要跟我搶嗎？',
                '    真是個噁心的人，我寧願你現在就變成一隻青蛙',
                '    這樣那個女的就再也不會愛你了。',
                '',
                '2022/03/15 13:45:44 輸出完成',
                '2022/03/15 13:45:45 檔案 青蛙.chr 已自動匯出至目錄 弗拉格',
                
                '2022/03/16 21:30:15 第一層潛意識防衛機制已解除，正在建立新的防衛機制',
                '2022/03/16 21:30:20 防衛機制已啟用 (name=\'神貓芭絲特\')',
                '2022/03/16 22:08:40  新增物件 褻瀆核心',
                '2022/03/16 22:08:41  新增材質 褻瀆核心',
                '2022/03/16 22:08:43  弗拉耶德 的位置更改至 $(褻瀆核心)',
                '2022/03/16 22:08:42  已建立群組 褻瀆核心、弗拉耶德',
                '2022/03/16 22:08:43  群組 褻瀆核心、弗拉耶德 的位置更改至 $(世界樹根部)',
                '2022/03/16 22:08:43  啟用物件 褻瀆核心 的蔓延功能',
                '2022/03/16 22:08:45  新增物件 空鬼',
                '2022/03/16 22:08:45  新增材質 空鬼',
                '2022/03/16 22:08:46  啟用物件 褻瀆核心 的召喚功能',
            ]
        case '4':
            var playerlst=[]
            for (const chr of playerchr){
                playerlst.push(`2022/09/30 20:03:42 使用者 ${chr} 登入系統`)
            }
            
            return playerlst
    }

}

async function printStory(storyNum) {
    var story = getStory(storyNum);
    printHost();
    await printText(`歷史紀錄 (${storyNum}/4) 加載中...`);
    for (const element of story) {
        $('.container').append('<br /><span class="host col-12 m-0 p-0">' + '' + '&nbsp;</span>');
        console.log(element);
        await printText(element);  
    }
    printHost(); 
    if (parseInt(storyNum)>0 & parseInt(storyNum)<4)
        {
            await printText(`歷史紀錄 (${storyNum}/4) 加載完畢。繼續加載請輸入 log ${parseInt(storyNum)+1}`);
        }
    else{
        await printText(`歷史紀錄 (${storyNum}/4) 加載完畢。`);
    }
    user_input();
}

function checkInput(input_data) {
    switch (input_data) {
        case 'log':
            $('.container').empty();
            printStory('1');
            return true   
        case 'log 1':
            $('.container').empty();
            printStory('1');
            return true
        case 'log 2':
            $('.container').empty();
            printStory('2');
            return true
        case 'log 3':
            $('.container').empty();
            printStory('3');
            return true
        case 'log 4':
            $('.container').empty();
            printStory('4');
            return true
        default:
            return false;
    }
}

async function user_input() {
    printHost();

    $('.container .host').last().append('<input type="text" id="id_and_code" name="id_and_code" class="col-4 col-md-6 col-lg-8 m-0 p-0">');
    $('#id_and_code').focus();
    $('#id_and_code').keypress(async function (event) {
        if (event.keyCode == 13) {
            $('#id_and_code').prop('disabled', true);
            Ch = await checkInput($('#id_and_code').val());
            $('#id_and_code').removeAttr('id');
            if (!Ch) { 
                printHost();
                await printText('輸入錯誤, 請重新輸入');
                user_input();
            }
            
        }
    });
}


var verInfo = `Welcome to DreamMaker 2022.09 LTS (GNU/Linux 4.4.0-139-generic x86_64)

<br/><br/><br/> &nbsp;* Documentation:  https://help.DreamMaker.com
<br/> &nbsp;* Management:     https://landscape.DreamMaker.com
<br/> &nbsp;* Support:        https://DreamMaker.com/support
<br/><br/><br/> 79 packages can be updated.
<br/> 0 updates are security updates.


<br/><br/><br/> *** System restart required ***
<br/> Last login: Fri Sep 30 20:03:42 2022 from 101.12.8.172 <br />`;
let text = ['使用者 弗拉耶德 登入系統', '目前只能查看終端機歷史紀錄', '請輸入 log 1 以查看'];

async function main() {
    $('.container').append(verInfo);
    for (let i = 0; i < text.length; i++) {
        printHost();
        await printText(text[i]);
        await sleep(300);
    }
    user_input();
}
main();
pageScroll();