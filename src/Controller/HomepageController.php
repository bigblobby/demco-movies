<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomepageController extends AbstractController
{
    /**
     * @Route("/{reactRouting}/{slug}", name="index", defaults={"reactRouting": null, "slug": null})
     */
    public function index()
    {
        return $this->render('homepage/index.html.twig');
    }
}
