<?php


namespace BotFactory\FibraClick\Listeners;


use Flarum\Frontend\Document;
use Flarum\Settings\SettingsRepositoryInterface;
use Psr\Http\Message\ServerRequestInterface;

class ContentListener
{
    /**
     * @var Document
     */
    private $document;
    /**
     * @var ServerRequestInterface
     */
    private $request;
    /**
     * @var SettingsRepositoryInterface
     */
    private $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * Get current Flarum document and current Server Request
     *
     * @param Document $flarumDocument
     * @param ServerRequestInterface $serverRequestInterface
     */
    public function __invoke(Document $flarumDocument, ServerRequestInterface $serverRequestInterface)
    {
        $this->document = $flarumDocument;
        $this->request = $serverRequestInterface;

        $this->addThemeColor();
        $this->addFont();

        if ($this->settings->get("fibraclick.ads.load") == '1') {
            $this->addAdSense();
        }

        $trackingCode = $this->settings->get("fibraclick.analytics.trackingCode");

        if ($trackingCode != "") {
            $this->addAnalytics($trackingCode);
        }
    }

    private function addThemeColor()
    {
        $this->document->meta['theme-color'] = '#ffffff';
    }

    private function addFont()
    {
        $this->document->head[] = '<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700,600">';
    }

    private function addAdSense()
    {
        $this->document->head[] = <<<EOT
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
    console.log('Pausing ads...');
    (adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;
    (adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=1;
    
    window.resumeBasicAds = function() {
        console.log('Resuming basic ads...');
        (adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=0;
    };
    
    window.resumePersonalizedAds = function() {
        console.log('Resuming personalized ads...');
        (adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=0;
        (adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=0;
    };
</script>
EOT;
    }

    private function addAnalytics($trackingCode)
    {
        $this->document->head[] = <<<EOT
<script async src="https://www.googletagmanager.com/gtag/js?id=$trackingCode"></script>
<script type="text/plain" data-type="text/javascript" data-name="analytics">
    console.log('Resuming analytics...');
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '$trackingCode');
</script>
EOT;

    }
}
