<?php namespace iycode;

use Flarum\Support\Extension as BaseExtension;
use Illuminate\Events\Dispatcher;
use Flarum\Events\RegisterLocales;

class Extension extends BaseExtension
{
    public function listen(Dispatcher $events)
    {
        $events->listen(RegisterLocales::class, function (RegisterLocales $event) {
            $event->manager->addLocale('ko', 'Korean');
            $event->addTranslations('ko', __DIR__.'/../locale/core.yml');
            $event->manager->addJsFile('ko', __DIR__.'/../locale/core.js');
            $event->manager->addConfig('ko', __DIR__.'/../locale/core.php');
            $event->addTranslations('ko', __DIR__.'/../locale/likes.yml');
            $event->addTranslations('ko', __DIR__.'/../locale/lock.yml');
            $event->addTranslations('ko', __DIR__.'/../locale/mentions.yml');
            $event->addTranslations('ko', __DIR__.'/../locale/pusher.yml');
            $event->addTranslations('ko', __DIR__.'/../locale/sticky.yml');
            $event->addTranslations('ko', __DIR__.'/../locale/subscriptions.yml');
            $event->addTranslations('ko', __DIR__.'/../locale/tags.yml');
        });
    }
}
